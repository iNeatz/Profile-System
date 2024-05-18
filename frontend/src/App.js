import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/login" exact element={<Login />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
