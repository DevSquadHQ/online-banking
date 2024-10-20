import React from "react";
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import SidebarForm from "./Components/sidebar/SidebarForm";
import HeaderForm from "./Components/header/HeaderForm";
import { useLocation } from "react-router-dom";

export default function App() {
  const [expanded, setExpanded] = useState(true);
  const clickHandler = () => setExpanded((makeOpen) => !makeOpen);
  let router = useRoutes(routes);
  let location = useLocation();

  return (
    <div>
      {location.pathname === "/home" ? (
        <>
          <HeaderForm clickHandler={clickHandler} />
          <SidebarForm expanded={expanded} />{" "}
        </>
      ) : (
        <>{router} </>
      )}
    </div>
  );
}


