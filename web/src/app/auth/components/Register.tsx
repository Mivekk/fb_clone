"use client";

import { RegisterDocument } from "@/generated/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

type RegisterUserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type ImageInfo = {
  type: "user" | "post" | "comment";
  id: number;
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

  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!ref.current?.files) {
      console.log("image not provided");
      return;
    }

    const result = await register({ variables: { data: userData } });

    if (!result.data?.register.user) {
      console.log("could not register");
      return;
    }

    const image = ref.current.files[0];
    const imageDbData: ImageInfo = {
      type: "user",
      id: result.data.register.user.id,
    };

    const formData = new FormData();
    formData.append("dbData", JSON.stringify(imageDbData));
    formData.append("image", image);

    const response = await fetch("http://localhost:4000/api/image-upload", {
      method: "POST",
      body: formData,
    });

    if (!response) {
      console.log("could not fetch image-upload");
      return;
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div>
      <div className="text-xl font-bold">Register</div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col w-[200px]"
        encType="multipart/form-data"
      >
        <input
          type="text"
          placeholder="First name"
          value={userData.firstName}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, firstName: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Last name"
          value={userData.lastName}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, lastName: e.target.value }))
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <input type="file" name="image" ref={ref} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
