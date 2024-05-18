import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { logOut } = useAuth();

  const handleLogout = () => {
    logOut();
    window.location.reload();
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <button className="white-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
