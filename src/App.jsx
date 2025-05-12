import { useEffect } from "react";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import GlobalStyle from "./styles/common/globalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Booth from "./pages/booth/Booth";
import Community from "./pages/community/Community";
import Chatbot from "./pages/chatbot/Chatbot";
import Notice from "./pages/notice/Notice";
import NoticeDetail from "./pages/notice/NoticeDetail";
import Credits from "./pages/credits/Credits";

const router = createBrowserRouter([
  {
    path: "/", // 홈은 Layout 없이 직접 렌더링
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/notice/:id",
        element: <NoticeDetail />,
      },
      {
        path: "credits",
        element: <Credits />,
      },
      {
        path: "/booth",
        element: <Booth />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/chatbot",
        element: <Chatbot />,
      },
    ],
  },
]);

function App() {
  // 반응형웹앱을 위한 코드
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="App">
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
