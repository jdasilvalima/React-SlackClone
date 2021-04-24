import React from 'react'
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
    const { roomId } = useParams();

    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong># general</strong>
                        <StarOutlineIcon/>
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat
