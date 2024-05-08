import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import SigninPage from "./components/SigninPage";
import SuccessPage from "./components/SuccessPage";

function App() {
  const appRounter = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/success", element: <SuccessPage /> },
    { path: "/signin", element: <SigninPage /> },
  ]);
  return <RouterProvider router={appRounter} />;
}

export default App;
