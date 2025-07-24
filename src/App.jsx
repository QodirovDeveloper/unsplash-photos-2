import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import SingleImage from "./pages/SingleImage";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import { Home, Profile, Signup, SingleImage, Login } from "./pages";

// import ProtectedRoutes from "./components/ProtectedRoutes";
import { ProtectedRoutes } from "./components";
import MainLayout from "./layout/MainLayout";
import { useSelector } from "react-redux";
import { store } from "./app/store";

function App() {
  const { user } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/singleImage/:id",
          element: <SingleImage />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
