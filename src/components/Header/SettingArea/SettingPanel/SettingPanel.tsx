import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import s from './settingPanel.module.scss'

function SettingPanel() {
    return (
        <div className={`${s.setting_panel} setting_panel`}>
            <div>
                <a href="/">
                    <FontAwesomeIcon icon="search" />
                </a>{' '}
            </div>
            <div>
                <a href="/">
                    <FontAwesomeIcon icon="home" />
                </a>{' '}
            </div>
            <div>
                <a href="/">
                    <FontAwesomeIcon icon="bell" />
                </a>{' '}
            </div>
            <div>
                <a href="/">
                    <FontAwesomeIcon icon="envelope" />
                </a>{' '}
            </div>
            <div>
                <a href="/">
                    <FontAwesomeIcon icon="globe-americas" />
                </a>{' '}
            </div>
        </div>
    )
}

export default SettingPanel
