import React, { useState, useEffect } from 'react'
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../setting/Firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
    const { roomId } = useParams();
    const [ roomDetails, setRoomDetails ] = useState(null);
    const [ roomMessages, setRoomMessages ] = useState([]);

    //run when the component load or when there is an update
    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot => (
                setRoomDetails(snapshot.data()) //give back the name in the db
            ))

            db.collection('rooms').doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) =>
                setRoomMessages(
                    snapshot.docs.map(doc => doc.data())
                )
            )
        }

    }, [roomId])

    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarOutlineIcon/>
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </div>
            </div>

            <div className="chat_messages">
                { roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    />
                ))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat
