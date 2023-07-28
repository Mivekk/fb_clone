import Image from "next/image";
import stick from "../../../public/stick.png";

const NavBar: React.FC<{}> = async () => {
  return (
    <div className="flex items-center justify-end w-full h-14 bg-white border-b-[#dbdde0] shadow-sm">
      <Image
        src={stick}
        alt="profile picture"
        className="w-12 h-12 ml-2 mr-2 max-h-full rounded-full"
      />
    </div>
  );
};

export default NavBar;
