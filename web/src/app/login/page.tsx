import Form from "./components/Form";

const Login: React.FC<{}> = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col items-center w-[40rem] h-[30rem] bg-white">
        <div className="font-bold text-3xl mt-4">Login</div>
        <Form />
      </div>
    </div>
  );
};

export default Login;
