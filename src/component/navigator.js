import React, { useEffect } from "react";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";

function Navigator() {
  const navigate = useNavigate();
  const [user] = useOutletContext();
  useEffect(() => {
    console.log("inside use effect");
    console.log(user);
    // console.log(props);
    // <Navigate to="/login" replace />;
    navigate(`${user}`, { replace: true });
  });

  return (
    <>
      <p>{user}</p>
    </>
  );
}

export default Navigator;
