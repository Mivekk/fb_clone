import { getUser } from "@/functions";
import { redirect } from "next/navigation";

const Home: React.FC<{}> = async ({}) => {
  const user = await getUser();

  if (!user.data.me) {
    redirect("/authenticate");
  }

  return <div>Home {user.data.me.firstName}</div>;
};

export default Home;
