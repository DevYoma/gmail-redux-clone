import { Button } from '@material-ui/core';
import React from 'react'
import '../Styles/Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {IconButton} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

const Sidebar = () => {

    const dispatch = useDispatch();

    return ( 
        <div className="sidebar">
            <Button
             startIcon={<AddIcon fontSize="large"/>}
             className="sidebar__compose"
             onClick={() => dispatch(openSendMessage())}
            >
                 Compose
            </Button>

            <SidebarOption selected={true} Icon={InboxIcon} title="Inbox" numbers={54}/>
            <SidebarOption Icon={StarIcon} title="Starred" numbers={30}/>
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" numbers={34}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" numbers={4}/>
            <SidebarOption Icon={NearMeIcon} title="Sent" numbers={12}/>
            <SidebarOption Icon={NoteIcon} title="Drafts" numbers={43}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More"/>

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>

                    <IconButton>
                        <DuoIcon />
                    </IconButton>

                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>

        </div>
     );
}
 
export default Sidebar;