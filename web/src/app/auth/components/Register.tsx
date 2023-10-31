"use client";

import { Button } from "@/app/components/ui/button";
import { DialogContent } from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { RegisterDocument } from "@/generated/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type RegisterUserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Register: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [userData, setUserData] = useState<RegisterUserData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [register] = useMutation(RegisterDocument);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // if (!ref.current?.files) {
    //   console.log("image not provided");
    //   return;
    // }

    // const { image_url, error } = await uploadImage(ref.current.files[0]);

    // if (error) {
    //   console.log(error);
    //   return;
    // }

    const result = await register({
      variables: { data: userData },
    });

    if (
      result.errors ||
      result.data?.register.error ||
      !result.data?.register.user
    ) {
      console.log("could not register");
      return;
    }

    router.refresh();
    router.push("/");
  };

  return (
    <DialogContent
      className="!w-[400px] p-3"
      onInteractOutside={(e) => e.preventDefault()}
    >
      <div className="w-full">
        <div className="text-3xl font-semibold">Sign Up</div>
        <div className="text-md">It's quick and easy.</div>
        <div className="w-full h-[1px] bg-gray-500 opacity-50 my-3" />
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-3 mt-2"
          encType="multipart/form-data"
        >
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="First name"
              value={userData.firstName}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
            <Input
              type="text"
              placeholder="Last name"
              value={userData.lastName}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          </div>
          <Input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <Input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <Button className="bg-green-600 w-1/2 self-center" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </DialogContent>
  );
};

export default Register;
