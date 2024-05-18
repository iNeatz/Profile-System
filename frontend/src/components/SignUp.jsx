import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //Function to handle Change in form input
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  //Function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `${process.env.REACT_APP_BASE_URL}/auth/signup`;
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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
      <div className="form-shadow mx-10 flex h-[500px] w-full max-w-5xl rounded-[10px] max-lg:flex-col">
        <div className="flex flex-1 flex-col items-center justify-center rounded-tl-[10px] bg-accent py-5 max-lg:rounded-tr-[10px] lg:rounded-bl-[10px]">
          <h1 className="mt-0 self-center text-[35px] text-white">
            Returning to visit?
          </h1>
          <Link to="/login">
            <button type="button" className="white-btn">
              Sign in
            </button>
          </Link>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center rounded-br-[10px] bg-white px-5 max-lg:rounded-bl-[10px] lg:rounded-tr-[10px]">
          <form
            method="POST"
            className="flex w-full flex-col items-center sm:w-[80%]"
            onSubmit={handleSubmit}
          >
            <h1 className="mt-0 text-[32px] sm:text-[40px]">Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              required
              className="input"
            />
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
              <div className="mx-[5px] my-0 w-[370px] rounded-[5px] bg-[#f34646] p-[15px] text-center text-[14px] text-white">
                {error}
              </div>
            )}

            <button type="submit" className="accent-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
