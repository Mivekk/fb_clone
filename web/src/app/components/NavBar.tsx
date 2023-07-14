import Image from "next/image";
import stick from "../../../public/stick.png";
import { MeDocument } from "@/generated/graphql";
import Link from "next/link";
import { getClient } from "@/lib/client";
import { accessToken } from "@/token";

const getUser = async () => {
  console.log("accessToken", accessToken);

  return getClient().query({ query: MeDocument });
};

const NavBar: React.FC<{}> = async () => {
  const { data } = await getUser();

  return (
    <div className="flex items-center justify-end w-full h-14 bg-white border-b-[#dbdde0] shadow-sm">
      {data?.me ? (
        <>
          <div>
            {data.me.firstName} {data.me.lastName}
          </div>
          <Image
            src={stick}
            alt="profile picture"
            className="w-12 h-12 ml-2 mr-2 max-h-full rounded-full"
          />
        </>
      ) : (
        <Link href={"/login"} className="mr-4">
          login
        </Link>
      )}
    </div>
  );
};

export default NavBar;
