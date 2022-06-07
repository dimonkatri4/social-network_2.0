import React from 'react';
import style from './rightPanel.module.scss'
import SidebarContainer from './Sidebar/SidebarContainer'


const RightPanel = () => {
    return (
        <div className={style.rightPanel}>
            <SidebarContainer />
        </div>
    );
};

export default RightPanel;