import React from 'react'
import '../Styles/Header.css'
import Gmail from '../assets/Gmail.png';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return ( 
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img className="header__logo" src={Gmail} alt=""/>
                <h2 className="header__name">Gmail</h2>
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="Search mail"/>
                <ArrowDropIcon className="header__inputCaret"/>
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
     );
}
 
export default Header;