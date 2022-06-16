import React from 'react'
import PhotoHeader from './PhotoHeader/PhotoHeader';
import style from "./settingArea.module.scss"
import SettingPanel from "./SettingPanel/SettingPanel";
import {IProfile} from "../../../types/IProfile";

interface Props {
    isAuth: boolean
    profileOwner: IProfile
}

function SettingArea(props: Props) {
    return (
        <div className={`${style.setting_area} setting_area`}>
            <SettingPanel/>
            { Object.keys(props.profileOwner).length ? <PhotoHeader {...props} /> : null}
        </div>
    )
}

export default SettingArea