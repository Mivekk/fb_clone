import { MeDocument } from "@/generated/graphql";
import { getClient } from "@/lib/client";
import Auth from "./components/Auth";
import { Feed } from "./components/Feed";
import { NavBar } from "./components/NavBar";

const getUser = async () => {
  return getClient().query({
    query: MeDocument,
    fetchPolicy: "network-only",
  });
};

const Home: React.FC<{}> = async () => {
  const user = await getUser();

  return (
    <>
      {user.data.me ? (
        <>
          <NavBar />
          <Feed />
        </>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Home;
