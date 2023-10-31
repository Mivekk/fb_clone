"use client";

import { Avatar } from "@/app/components/ui/avatar";
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
  PaginatedPostsDocument,
} from "@/generated/graphql";
import { useProfileTransition } from "@/hooks/useProfileTransition";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { DialogClose } from "@radix-ui/react-dialog";
import React, { useState } from "react";

const CreatePost: React.FC<{}> = ({}) => {
  const [handleTransition] = useProfileTransition();

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

    client.cache.updateQuery({ query: PaginatedPostsDocument }, (data) => {
      if (!data) {
        return data;
      }

      return {
        paginatedPosts: {
          hasMore: data.paginatedPosts.hasMore,
          posts: [...data.paginatedPosts.posts, result.data!.createPost.post!],
        },
      };
    });
  };

  return (
    <div className="p-2 mt-2 rounded-md md:w-[32rem] sm:w-[24rem] w-[18rem] shadow-md bg-white dark:bg-[#202122] flex items-center">
      <Avatar
        image_url={data?.me?.image_url}
        onClick={() => handleTransition(data?.me?.id)}
      />
      <Dialog>
        <DialogTrigger className="grow h-10 ml-2 bg-gray-200 dark:bg-[#3A3B3C] rounded-full flex justify-start items-center text-md">
          <div className="ml-4 select-none">Create post...</div>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[425px] dark:text-white"
          onInteractOutside={(e) => e.preventDefault()}
        >
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
