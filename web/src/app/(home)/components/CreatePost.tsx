"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import {
  CreatePostDocument,
  MeDocument,
  PostsDocument,
} from "@/generated/graphql";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { DialogClose } from "@radix-ui/react-dialog";
import React, { useState } from "react";

const CreatePost: React.FC<{}> = ({}) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const { data } = useQuery(MeDocument);
  const [createPost, { client }] = useMutation(CreatePostDocument);

  const handleClick = async () => {
    const result = await createPost({ variables: { data: { title, body } } });

    if (!result.data?.createPost.post || result.data.createPost.error) {
      console.log(result);
      return;
    }

    const cachedPosts = client.cache.readQuery({ query: PostsDocument });

    client.cache.modify({
      fields: {
        posts() {
          return [result.data!.createPost.post, ...cachedPosts!.posts];
        },
      },
    });
  };

  return (
    <div className="p-2 mt-2 rounded-md md:w-[32rem] sm:w-[24rem] w-[18rem] shadow-md bg-white flex items-center">
      <Avatar>
        {data?.me?.image_url && (
          <AvatarImage
            src={`http://localhost:5000/fb_clone/${data?.me?.image_url}`}
            className="h-10 w-10 rounded-full"
          />
        )}
        <AvatarFallback />
      </Avatar>
      <Dialog>
        <DialogTrigger className="grow h-10 ml-2 bg-gray-200 rounded-full flex justify-start items-center text-md">
          <div className="ml-4 select-none">Create post...</div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create new post</DialogTitle>
            <DialogDescription>
              Write a title and a body of your post. Click send when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="body">Body</Label>
              <Textarea
                id="body"
                placeholder="Post body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="resize-none h-40"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={() => handleClick()}>Send</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreatePost;
