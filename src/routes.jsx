import App from "./App";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Register from "./components/Register";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "feed",
        element: <Feed />,
      },
    ],
  },
];

export default routes;
