// src/hooks/useLogout.js
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { logOut } from "../app/features/userSlice";
import toast from "react-hot-toast";

export const useLogout = () => {
  const dispatch = useDispatch();

  const logoutUser = async () => {
    try {
      await signOut(auth);
      dispatch(logOut());
      toast.success("Successfully logged out");
    } catch (error) {
      toast.error("Logout failed");
      console.error(error.message);
    }
  };

  return { logoutUser };
};
