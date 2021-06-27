import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="sidebar__headerRight">
                    <DonutLargeIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
