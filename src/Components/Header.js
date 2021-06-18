import React from 'react'
import '../Styles/Header.css'
import Gmail from '../assets/Gmail.png';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import { useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { useDispatch } from 'react-redux'
import { auth } from '../Firebase/Firebase';



const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }
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
                <Avatar 
                    src={user?.photoUrl}
                    onClick={signOut}
                    className="header__rightAvatar"
                />
            </div>
        </div>
     );
}
 
export default Header;