import react from 'react';
import './Slider.css';
import { Avatar , IconButton } from "@material-ui/core"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import Sidebarchat from './Sidebarchat.js';

function Slider() {
    return (
        <div className="slider">
           
            <div className="sidebar__header">
            <Avatar src="https://image.shutterstock.com/image-illustration/modern-cars-studio-room-3d-260nw-735402217.jpg"/>
                
                <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>


                </div>
            </div>
            <div className="sidebar__search">
               <div className="sidebar__searchContainer">
                <SearchIcon/>
               <input placeholder="Search or start new Chat" type="text"></input>
                   
               </div>
            </div>
            <div className="sidebar__chats">
                <Sidebarchat/>
                <Sidebarchat/>
                <Sidebarchat/>
                <Sidebarchat/>

            </div>
        </div>
    )
}

export default Slider;