import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import LoginPage from "./pages/LoginPage/LoginPage"
import ChatPage from "./pages/ChatPage/ChatPage"
import { LayoutChat } from "./components/Layout/LayoutChat"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "",
    element: <LayoutChat />,
    children: [
      {
        path: "/chat",
        element: <ChatPage />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={routes} />
}

export default App
