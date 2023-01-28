import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { Detector } from "react-detect-offline";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">{name}</span>

      <span className="navbar-brand">
        <Detector
          render={({ online }) => (
            <span className={`navbar-brand ${online ? "text-light" : "text-danger"}`}>
               {online ? "Online" : "Offline"}
            </span>
          )}
        />
      </span>

      <button className="btn btn-outline-danger" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
        <span> Exit</span>
      </button>
    </div>
  );
};
