import CreateUser from "../pages/CreateUser";
import Home from "../pages/Home";
import UpdateUser from "../pages/UpdateUser";

export const publicRoutes = [
  { to: "/", element: Home },
  { to: "/create", element: CreateUser },
  { to: "/update/:id", element: UpdateUser },
];
