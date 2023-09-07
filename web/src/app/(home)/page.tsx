import { getUser } from "@/functions";
import { redirect } from "next/navigation";
import Feed from "./components/Feed";

const Home: React.FC<{}> = async ({}) => {
  const user = await getUser();

  if (!user.data.me) {
    redirect("/auth");
  }

  return (
    <div>
      <Feed />
    </div>
  );
};

export default Home;
