import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const user = useSelector((state) => state.user.user);
  const { logoutUser } = useLogout();

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-gray-900 text-white">
      <Link to="/" className="text-xl font-bold">MyApp</Link>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span>{user.displayName || user.email}</span>
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <button
              onClick={logoutUser}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
