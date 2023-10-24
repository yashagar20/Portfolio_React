import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiLinkedinLine
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {/* <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link> */}
      <Link href={'https://www.linkedin.com/in/yash-agarwal-aa12a6218/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      {/* <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link> */}
      <Link href={'https://www.instagram.com/stfu.yash._/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      {/* <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link> */}
    </div>
  );
};

export default Socials;
