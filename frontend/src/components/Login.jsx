import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { setToken } = useAuth();

  //Function to handle Change in form input
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  //Function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `${process.env.REACT_APP_BASE_URL}/auth/login`;
      const { data: res } = await axios.post(url, data);
      setToken(res.data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-primary">
      <div className="form-shadow mx-10 flex h-[500px] w-full max-w-5xl rounded-[10px] max-lg:flex-col-reverse">
        <div className="flex flex-1 flex-col items-center justify-center rounded-bl-[10px] bg-white px-5 max-lg:rounded-bl-[10px] max-lg:rounded-br-[10px] lg:rounded-tl-[10px]">
          <form
            method="POST"
            className="flex w-[80%] flex-col items-center"
            onSubmit={handleSubmit}
          >
            <h1 className="mt-0 text-[40px]">Log In</h1>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
              className="input"
            />

            {error && (
              <div className="mx-[5px] my-0 w-full rounded-[5px] bg-[#f34646] p-[15px] text-center text-[14px] text-white">
                {error}
              </div>
            )}

            <button type="submit" className="accent-btn">
              Sign In
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center rounded-tr-[10px] bg-accent py-5 max-lg:rounded-tl-[10px] lg:flex-1 lg:rounded-br-[10px]">
          <h1 className="mt-0 self-center text-[35px] text-white">New Here?</h1>
          <Link to="/signup">
            <button type="button" className="white-btn">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
