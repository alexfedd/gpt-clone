import { createHashRouter } from "react-router-dom";
import SignIn from "../../pages/sign-in/SignIn";
import Layout from "../../pages/layout/Layout";
import SignUp from "../../pages/sign-up/SignUp";
import Chat from "../../pages/chat/Chat";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Chat />
      },
      {
        path: '/c/:chatId',
        element: <Chat />
      }
    ]
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />
  }
]);
