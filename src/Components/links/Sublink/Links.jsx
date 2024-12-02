import React from "react";
import { Link } from "react-router-dom";

export default function Links(props) {
  const {linkName, to, className, onclick} = props;
  return (
    <>
      <Link to={to}  onClick={onclick} className={`${className} text-blue-700 pt-2 `}>
        {linkName}
      </Link>
    </>
  );
}
