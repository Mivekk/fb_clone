import { Feed } from "./components/Feed";
import NavBar from "./components/NavBar";

const Home: React.FC<{}> = () => {
  return (
    <div>
      <NavBar />
      <Feed />
    </div>
  );
};

export default Home;
