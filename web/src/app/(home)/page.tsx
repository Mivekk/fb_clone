import Feed from "./components/Feed";
import { Suspense } from "react";

const Home: React.FC<{}> = ({}) => {
  return (
    <div>
      <div>elo</div>
      <Suspense fallback={<div>loading...</div>}>
        <Feed />
      </Suspense>
    </div>
  );
};

export default Home;
