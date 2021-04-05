import React, { useEffect } from "react";

function LogOutAdmin() {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location = "/login";
  });
  return null;
}

export default LogOutAdmin