import App from "./App";
import Chat from "./components/Chat";
import CreatePost from "./components/CreatePost";
import ErrorElement from "./components/ErrorElement";
import Feed from "./components/Feed";
import Followers from "./components/Followers";
import Following from "./components/Following";
import FullPost from "./components/FullPost";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import SearchPeople from "./components/SearchPeople";
import UpdateProfile from "./components/UpdateProfile";
import UserPosts from "./components/UserPosts";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
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
        index: true,
        element: <Feed />,
      },
      {
        path: "create",
        element: <CreatePost />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "profile/:username",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <UserPosts />,
          },
          {
            path: "followers",
            element: <Followers />,
          },
          {
            path: "following",
            element: <Following />,
          },
        ],
      },
      ,
      ,
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
