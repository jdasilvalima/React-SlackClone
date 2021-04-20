import React from 'react'
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from '/SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Front Dev</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Jade Silva
                    </h3>
                </div>
                <CreateIcon/>
                <SidebarOption Icon={} title="Threads"/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
                <SidebarOption/>
            </div>
        </div>
    )
}

export default Sidebar
