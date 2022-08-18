import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./profile-menu.styles.scss";
import { toggleProfileMenuHidden } from "../../redux/profile-menu/profile-menu.actions";
import { signOutStart } from "../../redux/user/user.actions";

const ProfileMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="profile-menu">
      <div 
        className="option"
        onClick={() => {
          dispatch(toggleProfileMenuHidden());
        }}
      >
        <Link to="/setting">Settings</Link>
      </div>
      <div
        className="option"
        onClick={() => {
          dispatch(signOutStart());
          dispatch(toggleProfileMenuHidden());
        }}
      >
        <Link to="/"> Log Out</Link>
      </div>
    </div>
  );
};

export default ProfileMenu;
