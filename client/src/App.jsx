import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProblemSet from "./pages/ProblemSet";
import ProblemDetail from "./pages/ProblemDetail";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import { Toaster } from "sonner";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <AuthPage />,
    },
    {
      path: "/register",
      element: <AuthPage />,
    },
    {
      path: "/problems",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <ProblemSet />,
        },
        {
          path: ":slug",
          element: <ProblemDetail />,
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster richColors position="top-right" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
