import App from "./App";
import CreatePost from "./components/CreatePost";
import Feed from "./components/Feed";
import Followers from "./components/Followers";
import Following from "./components/Following";
import FullPost from "./components/FullPost";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import SearchPeople from "./components/SearchPeople";

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
      {
        path: "create",
        element: <CreatePost />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "followers",
        element: <Followers />,
      },
      {
        path: "following",
        element: <Following />,
      },
      {
        path: "find",
        element: <SearchPeople />,
      },
      {
        path: "post/:id",
        element: <FullPost />,
      },
    ],
  },
];

export default routes;
