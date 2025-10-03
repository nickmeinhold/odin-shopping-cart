import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        {/* The Outlet renders the component for the current route (Home, Cart, or Shop) */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
