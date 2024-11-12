import { Outlet } from "react-router-dom";
import HeaderForm from "../Components/header/HeaderForm";
import SidebarForm from "../Components/sidebar/SidebarForm";

const MainLayout = () => {
  return (
    <>
      <HeaderForm />
      <SidebarForm />
      <Outlet />
    </>
  );
};
export default MainLayout;
