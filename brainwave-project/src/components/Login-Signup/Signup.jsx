import Button from "../Button";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { AiFillSignature } from "react-icons/ai";
import { useState } from "react";

const SignUp = ({ onClose, toggleLoginSignup }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      id="signup"
      className="flex justify-center items-center h-screen bg-n-8/60"
    >
      <form
        id="modal"
        className="relative z-1 bg-n-6 rounded-lg shadow-md p-16 max-h-[40rem] h-full max-w-xl w-full flex flex-col justify-between"
      >
        <IoClose
          className="absolute top-2 right-2 text-3xl cursor-pointer"
          onClick={onClose}
        />
        <div className="mb-6">
          <label htmlFor="name" className="block text-n-1 font-bold mb-2">
            Name
          </label>
          <div className="flex items-center border-b-2 border-gray-500 py-2">
            <input
              value={formData.name}
              onChange={handleChange}
              type="text"
              id="username"
              placeholder="Enter your name"
              className="appearance-none bg-transparent border-none w-full text-n-1 mr-3 py-1 px-2 leading-tight focus:outline-none"
              required
            />
            <AiFillSignature style={{ color: "white", fontSize: "28px" }} />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="username" className="block text-n-1 font-bold mb-2">
            Username
          </label>
          <div className="flex items-center border-b-2 border-gray-500 py-2">
            <input
              value={formData.username}
              onChange={handleChange}
              type="text"
              id="username"
              placeholder="Select a username"
              className="appearance-none bg-transparent border-none w-full text-n-1 mr-3 py-1 px-2 leading-tight focus:outline-none"
              required
            />
            <IoPerson style={{ color: "white", fontSize: "28px" }} />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-n-1 font-bold mb-2">
            Email
          </label>
          <div className="flex items-center border-b-2 border-gray-500 py-2">
            <input
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              type="password"
              id="password"
              placeholder="Select a password"
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
          Sign Up
        </Button>
        <div>
          <p className="mt-5">
            Already have an account? Sign In{" "}
            <a
              href="#"
              className="underline"
              onClick={() => toggleLoginSignup(false)}
            >
              Here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
