import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const EditProfile = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { user, token } = useAuth();

  useEffect(() => {
    if (user) {
      setData({
        ...data,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    }
  }, []);

  //Function to handle Change in form input
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  //Function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `${process.env.REACT_APP_BASE_URL}/auth/profile`;
      const { data: res } = await axios.put(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      navigate("/");
      window.location.reload()
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
        <div className="flex flex-1 flex-col items-center justify-center rounded-[10px] bg-white px-5">
          <form
            className="flex w-full flex-col items-center sm:w-[80%]"
            onSubmit={handleSubmit}
          >
            <h1 className="mt-0 text-[32px] sm:text-[40px]">Update Account</h1>
            <div className="w-full gap-3 p-0 sm:flex">
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
            </div>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={data.email}
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
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
