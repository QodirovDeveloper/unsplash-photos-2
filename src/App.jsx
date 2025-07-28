import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import SingleImage from "./pages/SingleImage";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import {Home, Profile, SingleImage, Login, Signup} from './pages/index'
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MainLayout from "./layout/MainLayout";

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

// const ACCESS_KEY = "O2XRyjimvUwQaxKL4TysGBBPrQEa-1mb4d-FKIx3-pY";
// `https://api.unsplash.com/search/photos?query=${seatchParams}&client_id=` +
