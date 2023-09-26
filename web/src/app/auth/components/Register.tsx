"use client";

import React, { useRef, useState } from "react";

type RegisterUserData = Partial<{
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}>;

const Register: React.FC<{}> = ({}) => {
  const [userData, setUserData] = useState<RegisterUserData>({});

  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!ref.current?.files) {
      console.log("image not provided");
      return;
    }

    console.log("image:", ref.current.files[0]);
  };

  return (
    <div>
      <div className="text-xl font-bold">Register</div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col w-[200px]"
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
        <input type="file" ref={ref} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
