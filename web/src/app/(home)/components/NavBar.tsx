"use client";

import { Avatar } from "@/app/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { MeDocument } from "@/generated/graphql";
import { useProfileTransition } from "@/hooks/useProfileTransition";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import React, { useContext } from "react";
import Logout from "./Logout";
import { ThemeContext } from "@/contexts/ThemeProvider";
import fbIcon from "../../../../public/fb-icon.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NavBar: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [handleTransition] = useProfileTransition();

  const { theme, setTheme } = useContext(ThemeContext);

  const { data } = useSuspenseQuery(MeDocument, {
    fetchPolicy: "network-only",
  });

  return (
    <div className="w-full h-16 bg-white dark:bg-[#202122] flex justify-between select-none">
      <div className="flex w-16 h-16 justify-center items-center">
        <Image
          src={fbIcon}
          alt="fbIcon"
          width={48}
          height={48}
          className="hover:cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="mr-2">
          <Avatar image_url={data.me?.image_url} className="w-12 h-12" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white rounded-md p-2 mr-8">
          <DropdownMenuItem
            className="flex items-center gap-2"
            onClick={() => handleTransition(data.me?.id)}
          >
            <Avatar image_url={data.me?.image_url} />
            <div className="font-semibold">
              {data.me?.firstName} {data.me?.lastName}
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="h-[1px] bg-gray-200" />
          <DropdownMenuItem
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "Dark" : "Light"} theme
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Logout />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavBar;
