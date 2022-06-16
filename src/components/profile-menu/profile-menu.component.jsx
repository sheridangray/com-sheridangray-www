import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { signOutStart } from "../../redux/user/user.actions";

import "./profile-menu.styles.scss";
import { toggleProfileMenuHidden } from "../../redux/profile-menu/profile-menu.actions";

const ProfileMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="profile-menu" >
      <div className="option1">Settings</div>
      <div
        className="option"
        onClick={() => {
          dispatch(signOutStart());
          dispatch(toggleProfileMenuHidden());
        }}
      >
        Log Out
      </div>
    </div>
  );
};

export default ProfileMenu;
