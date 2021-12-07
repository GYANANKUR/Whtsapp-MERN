import { Avatar } from '@material-ui/core';
import react from 'react';
import './Sidebarchat.css';

function Sidebarchat() {
    return(
        <div className="sidebar">
                <Avatar/>
                <div className="sidebarchat__info">
                    <h2>Room name</h2>
                    <p>This will be the last message</p>
                </div>
        </div>
    )
        
    
}

export default Sidebarchat;