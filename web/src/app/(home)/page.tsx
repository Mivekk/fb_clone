import CreatePost from "./components/CreatePost";
import Feed from "./components/Feed";

const Home: React.FC<{}> = ({}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <CreatePost />
      <Feed />
    </div>
  );
};

export default Home;
