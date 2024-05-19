import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import './style.scss'
function Layout() {
  return (
    <div className="layout-wrapper">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
