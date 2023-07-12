import { PostsDocument } from "@/generated/graphql";
import { getClient } from "@/lib/client";

const getPosts = async () => {
  return getClient().query({ query: PostsDocument });
};

const Index: React.FC<{}> = async () => {
  const posts = await getPosts();

  const postsElements = posts.data.posts.map((post) => (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  ));

  return <div>{postsElements}</div>;
};

export default Index;
