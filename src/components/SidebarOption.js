import React from 'react'
import './SidebarOption.css';
import { useHistory } from "react-router-dom";
import db from '../setting/Firebase';

function SidebarOption({ Icon, title, id, addChannelOption }) {
    //track click > force a redirect
    const history = useHistory();

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push(title);
        }
    }

    const addChanel = () => {
        const channelName = prompt('Please enter the channel name');

        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    };

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChanel : selectChannel }>
            { Icon && <Icon className="sidebarOption_icon"/> }
            { Icon? (
                <h3>{ title }</h3>
            ) : (
                <h3 className="sidebarOption_channel">
                    <span className="sidebarOption_hash"> # { title } </span>
                </h3>
            )}
        </div>
    )
}

export default SidebarOption
