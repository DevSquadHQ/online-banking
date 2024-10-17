import React from "react";
import { Link } from "react-router-dom";

export default function Links(props) {
  const {linkName, to} = props;
  return (
    <>
      <Link to={to} className="text-blue-700">
        {linkName}
      </Link>
    </>
  );
}
