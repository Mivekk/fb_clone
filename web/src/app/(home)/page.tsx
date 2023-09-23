import Feed from "./components/Feed";

const Home: React.FC<{}> = ({}) => {
  return (
    <div className="w-full flex justify-center">
      <Feed />
    </div>
  );
};

export default Home;
