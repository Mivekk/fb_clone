import { Feed } from "./components/Feed";
import { NavBar } from "./components/NavBar";

const Home: React.FC<{}> = () => {
  return (
    <>
      <NavBar />
      <Feed />
    </>
  );
};

export default Home;
