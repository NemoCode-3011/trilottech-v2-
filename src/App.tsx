import type { RouteRecord } from "vite-react-ssg";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import StartProject from "./pages/StartProject";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [pathname, hash]);

  return null;
}

function Layout() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "start-project", element: <StartProject /> },
      { path: "privacy", element: <Legal doc="privacy" /> },
      { path: "terms", element: <Legal doc="terms" /> },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];