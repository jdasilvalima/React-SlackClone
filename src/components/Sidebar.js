import React, { useState, useEffect } from 'react'
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import db from '../setting/Firebase.js';

function Sidebar() {
    const[ channels, setChannels ] = useState([]);

    //Run this code ONCE when the sidebar component loads
    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
            })))
        ))
        return () => {
            
        }
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Dev Community</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Jade Silva
                    </h3>
                </div>
                <CreateIcon/>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mention & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr/>
            <SidebarOption Icon={AddIcon} title="Add Channel"/>
            <hr/>

            { channels.map(channel => (
                <SidebarOption title={ channel.name } id={ channel.id }/>
            ))}
        </div>
    )
}

export default Sidebar
