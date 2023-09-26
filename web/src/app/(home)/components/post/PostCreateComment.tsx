"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Textarea } from "@/app/components/ui/textarea";
import { BiSend } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useMutation } from "@apollo/client";
import { AddCommentDocument, MeDocument } from "@/generated/graphql";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

type PostCreateCommentProps = {
  postId: number;
  expanded: number;
  setExpanded: React.Dispatch<React.SetStateAction<number>>;
};

const PostCreateComment: React.FC<PostCreateCommentProps> = ({
  postId,
  expanded,
  setExpanded,
}) => {
  const [text, setText] = useState<string>("");

  const { data } = useQuery(MeDocument);
  const [addComment] = useMutation(AddCommentDocument);

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (expanded) {
      ref.current?.focus();
    }
  }, [expanded]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = await addComment({
      variables: { data: { postId, body: text } },
    });

    if (!result.data || result.data?.addComment.error) {
      return;
    }

    setText("");
  };

  return (
    <div className="flex pt-2 pb-1">
      <Avatar className="h-8 w-8">
        {data?.me?.image_url && (
          <AvatarImage
            src={`http://localhost:5000/fb_clone/${data?.me?.image_url}`}
            className="h-8 w-8 rounded-full"
          />
        )}
        <AvatarFallback />
      </Avatar>
      <form
        onSubmit={(e) => handleSubmit(e)}
        onClick={() => setExpanded((prev) => prev + 1)}
        className={cn(
          "flex flex-col grow shadow-sm border bg-gray-200 rounded-2xl ml-2"
        )}
      >
        <Textarea
          placeholder="Create comment..."
          className={cn(
            "resize-none px-2 py-1 h-fit border-none shadow-none min-h-8 focus-visible:ring-0",
            { "h-6 overflow-hidden": !expanded }
          )}
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={ref}
        />
        <button
          type="submit"
          className={cn("ml-auto mr-1 mb-1 mt-1", { hidden: !expanded })}
        >
          <BiSend />
        </button>
      </form>
    </div>
  );
};

export default PostCreateComment;
