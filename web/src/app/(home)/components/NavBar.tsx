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
import React from "react";
import Logout from "./Logout";

const NavBar: React.FC<{}> = ({}) => {
  const [handleTransition] = useProfileTransition();
  const { data } = useSuspenseQuery(MeDocument, {
    fetchPolicy: "network-only",
  });

  return (
    <div className="w-full h-12 bg-white flex justify-end select-none">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="mr-2">
          <Avatar image_url={data.me?.image_url} />
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
          <DropdownMenuItem>Dark theme</DropdownMenuItem>
          <DropdownMenuItem>
            <Logout />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavBar;
