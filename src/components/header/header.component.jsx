import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import ProfileBadge from '../profile-badge/profile-badge.component';
import ProfileMenu from '../profile-menu/profile-menu.component'

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectIsProfileMenuHidden } from '../../redux/profile-menu/profile-menu.selectors'

import "./header.styles.scss"

export const Header = () => {

  const currentUser = useSelector(selectCurrentUser);
  const isProfileMenuHidden = useSelector(selectIsProfileMenuHidden)

  return (
    <div className="header-container">
      <Link to='/' className="logo">
        Sheridan Gray
      </Link>
      { currentUser ? (
          <div className="options">
            <ProfileBadge />
          </div>
        ) : (
          <div className="options">
            <NavLink to='/sign-in' className="option">
              SIGN IN
            </NavLink>
          </div>
        )
      }
      {
        isProfileMenuHidden ? null : <ProfileMenu />
      }
    </div>
  );
};

export default Header;