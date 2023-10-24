//next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/avatar.png'}
        width={737}
        height={878}
        alt=""
        style={{ objectPosition: "center top" }}
        unoptimized={true}
      />
    </div>
  );
};

export default Avatar;
