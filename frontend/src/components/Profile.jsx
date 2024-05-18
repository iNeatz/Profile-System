import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { TbEdit, TbLogout2 } from "react-icons/tb";

const Profile = () => {
  const { logOut, user } = useAuth();

  const handleLogout = () => {
    logOut();
    window.location.reload();
  };

  return (
    <div className="relative flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-5 border-b text-[50px] text-white">
          {user.firstName} {user.lastName}
        </h1>
        <span className="flex gap-2 text-white ">
          Email: <p> {user.email}</p>
        </span>
      </div>

      <Link to="/edit-profile">
        <button className="absolute left-5 top-5 flex items-center justify-center rounded-full bg-white p-3 text-xl">
          <TbEdit />
        </button>
      </Link>
      <button
        className="absolute right-5 top-5 flex items-center justify-center rounded-full bg-white p-3 text-xl"
        onClick={handleLogout}
      >
        <TbLogout2 />
      </button>
    </div>
  );
};

export default Profile;
