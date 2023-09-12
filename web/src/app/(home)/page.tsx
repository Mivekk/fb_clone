import { getUser } from "@/functions";
import { redirect } from "next/navigation";
import Feed from "./components/Feed";
import { Suspense } from "react";

const Home: React.FC<{}> = async ({}) => {
  const user = await getUser();

  if (!user.data.me) {
    redirect("/auth");
  }

  return (
    <div>
      <div>elo</div>
      <Feed />
    </div>
  );
};

export default Home;
