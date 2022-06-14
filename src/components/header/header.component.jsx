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
      { currentUser ? 
        (
          <div className="header-left">
            <div className="options">
              <Link to='/' className="logo">
                Life
              </Link>
              
            <NavLink 
              to='/health' 
              className={isActive => "nav-link" + (!isActive ? " unselected" : " selected")}
            >
              Health
            </NavLink>
            <NavLink 
              to='/relationships' 
              className={isActive => "nav-link" + (!isActive ? " unselected" : " selected")}
            >
              Relationships
            </NavLink>
            <NavLink 
              to='/money' 
              className={isActive => "nav-link" + (!isActive ? " unselected" : " selected")}
            >
              Money
            </NavLink>
            <NavLink 
              to='/happiness' 
              className={isActive => "nav-link" + (!isActive ? " unselected" : " selected")}
            >
              Happiness
            </NavLink>
            <NavLink 
              to='/food' 
              className={isActive => "nav-link" + (!isActive ? " unselected" : " selected")}
            >
              Food
            </NavLink>
          </div>
          </div>
        ) : (
          <Link to='/' className="logo">
            Sheridan Gray
          </Link>
        )
      }
      { currentUser ? (

            <ProfileBadge />

        ) : (
          <div className="options"></div>
        )
      }
      {
        isProfileMenuHidden ? null : <ProfileMenu />
      }
    </div>
  );
};

export default Header;