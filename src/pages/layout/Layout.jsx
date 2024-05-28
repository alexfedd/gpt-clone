import { Outlet, redirect, useNavigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import "./style.scss";
import { getCookieByName } from "../../common/utils";

export const loader = () => {
  if (!getCookieByName("user")) {
    return redirect("/sign-in");
  }
  return null
}

function Layout() {
  return (
    <div className="layout-wrapper">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
