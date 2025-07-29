import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import toast from "react-hot-toast";
import { login } from "../app/features/userSlice";


export const useSignup = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const signup = async (userName, email, password) => {
    setIsPending(true);
    try {
      const req = await createUserWithEmailAndPassword(auth, email, password);
      console.log(req);
      if (!req.user) {
        throw new Error("Authentication filed");
      }
      await updateProfile(auth.currentUser, {
        userName,
        photoURL: "https://api.dicebear.com/9.x/initials/svg?seed=" + userName,
      });
      dispatch(login(req.user));
      toast.success(`Welcome, ${auth.currentUser.userName}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };
  return { signup, isPending };
};
