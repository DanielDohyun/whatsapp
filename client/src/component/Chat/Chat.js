import React from 'react';
import './Chat.css';
import {AttachFile, SearchOutlined, MoreVert} from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';

function Chat() {
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />
                
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                        <IconButton>
                            <SearchOutlined />
                        </IconButton>
                        <IconButton>
                            <AttachFile />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className='chat__message'>
                <span className='chat__name'>Daniel</span>    
                    This is a message
                
                    <span className='chat__timestamp'>
                    {new Date().toLocaleTimeString()}
                    </span>
                </p>

                <p className='chat__message chat__receiver'>
                <span className='chat__name'>Daniel</span>    
                    This is a message
                
                    <span className='chat__timestamp'>
                    {new Date().toLocaleTimeString()}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Chat
