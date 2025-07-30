import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import toast from "react-hot-toast";
import { login as loginActoin } from "../app/features/userSlice";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setIsPending(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      if (!res.user) throw new Error("Login failed");

      const { uid, email: userEmail, displayName } = res.user;
      dispatch(loginActoin({ uid, email: userEmail, displayName }));
      toast.success(`Welcome back, ${res.user.displayName || "user"}!`);
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setIsPending(false);
    }
  };
  return { login, isPending };
};
