"use client";

import { AddCommentDocument } from "@/generated/graphql";
import { useMutation } from "@apollo/client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import stick from "../../../../public/stick.png";

interface Props {
  postId: number;
  focus: boolean;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CommentInput: React.FC<Props> = ({ postId, focus, setFocus }) => {
  const [text, setText] = useState("");

  const ref = useRef<HTMLInputElement>(null);

  const [addComment] = useMutation(AddCommentDocument);

  useEffect(() => {
    if (focus && ref.current) {
      ref.current.focus();
    }
  }, [focus]);

  return (
    <div className="flex w-full">
      <Image
        src={stick}
        alt="profile picture"
        className="w-10 h-10 ml-4 -mr-2 mt-2 max-h-full rounded-full"
      />
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const response = await addComment({
            variables: { data: { body: text, postId } },
          });
          console.log(response);

          setText("");
        }}
        className={`bg-[#f0f2f5] ml-4 mr-4 rounded-lg mt-2 mb-2 flex ${
          focus ? "flex-col" : null
        } pt-1 pb-2 w-full`}
      >
        <input
          placeholder="Write comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`bg-[#f0f2f5] rounded-lg focus:outline-none ml-2 text-[#6d6f73] ${
            focus ? null : "w-full"
          }`}
          onFocus={() => setFocus(true)}
          ref={ref}
        />
        <button
          type="submit"
          className="w-fit ml-auto mr-2"
          disabled={text ? false : true}
        >
          <IoMdSend
            className={`${
              text
                ? "text-[#0571ed]"
                : "text-[#bec3c9] hover:cursor-not-allowed"
            }`}
          />
        </button>
      </form>
    </div>
  );
};
