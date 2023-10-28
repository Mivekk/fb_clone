import CreatePost from "./components/CreatePost";
import Feed from "./components/Feed";

const Home: React.FC<{}> = ({}) => {
  return (
    <div className="w-full flex flex-col items-center bg-gray-100 dark:bg-[#18191A]">
      <CreatePost />
      <Feed />
    </div>
  );
};

export default Home;
