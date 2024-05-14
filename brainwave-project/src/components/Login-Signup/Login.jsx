import Button from "../Button";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Login = ({ onClose, toggleLoginSignup }) => {
  return (
    <div
      id="login"
      className="flex justify-center items-center h-screen bg-n-8/60"
    >
      <form
        id="modal"
        className="relative z-1 bg-n-6 rounded-lg shadow-md p-16 max-h-[30rem] h-full max-w-xl w-full flex flex-col"
      >
        <IoClose
          className="absolute top-2 right-2 text-3xl cursor-pointer"
          onClick={onClose}
        />

        <div className="mb-6">
          <label htmlFor="email" className="block text-n-1 font-bold mb-2">
            Email
          </label>
          <div className="flex items-center border-b-2 border-gray-500 py-2">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="appearance-none bg-transparent border-none w-full text-n-1 mr-3 py-1 px-2 leading-tight focus:outline-none"
              required
            />
            <MdEmail style={{ color: "white", fontSize: "28px" }} />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-n-1 font-bold mb-2">
            Password
          </label>
          <div className="flex items-center border-b-2 border-gray-500 py-2">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="appearance-none bg-transparent border-none w-full text-n-1 mr-3 py-1 px-2 leading-tight focus:outline-none"
              required
            />
            <RiLockPasswordFill style={{ color: "white", fontSize: "28px" }} />
          </div>
        </div>
        <Button
          type="submit"
          className="text-n-1 w-1/3 absolute left-1/3"
          onClick={onClose}
        >
          Sign In
        </Button>
        <div>
          <p className="mt-5">
            Don't have an account? Sign Up{" "}
            <a
              href="#"
              className="underline"
              onClick={() => toggleLoginSignup(true)}
            >
              Here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
