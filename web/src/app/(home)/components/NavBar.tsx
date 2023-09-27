"use client";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/components/ui/avatar";
import { MeDocument } from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import React from "react";
import Logout from "./Logout";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

const NavBar: React.FC<{}> = ({}) => {
  const { data } = useSuspenseQuery(MeDocument, {
    fetchPolicy: "network-only",
  });

  return (
    <div className="w-full h-12 bg-gray-400 flex justify-end select-none">
      <DropdownMenu>
        <DropdownMenuTrigger className="mr-2">
          <Avatar>
            {data.me?.image_url && (
              <AvatarImage
                src={data.me?.image_url}
                className="h-10 w-10 rounded-full"
              />
            )}
            <AvatarFallback />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-red-500 rounded-md p-2">
          <DropdownMenuLabel>
            {data.me?.firstName} {data.me?.lastName}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Logout />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavBar;
