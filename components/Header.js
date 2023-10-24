import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-6 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-3 lg:gap-y-0 py-4 lg:py-8">
          {/* Text Logo */}
          <Link href={'/'}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "24px", fontWeight: "thin", marginRight: "10px", fontFamily: "monospace" }}>
                Yash
              </span>
              <span style={{ fontSize: "24px", fontWeight: "thin", fontFamily: "monospace" }}>
                Agarwal
              </span>
            </div>
          </Link>
          {/* Social */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
