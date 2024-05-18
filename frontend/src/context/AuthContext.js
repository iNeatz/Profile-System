import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const logOut = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
  };

  //JWT Authentication - to get the logged in user data
  const userAuthentication = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/auth/profile`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const { data } = await res.json();
        console.log("UserData", data);
        setUser(data);
      }
    } catch (error) {
      console.log("Error fetching user data");
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
