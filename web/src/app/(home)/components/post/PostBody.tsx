import React from "react";

type PostBodyProps = { body: string };

const PostBody: React.FC<PostBodyProps> = ({ body }) => {
  return <div>{body}</div>;
};

export default PostBody;
