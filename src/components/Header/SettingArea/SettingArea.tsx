import React from 'react'
import PhotoHeader from './PhotoHeader/PhotoHeader';
import s from "./settingArea.module.scss"
import SettingPanel from "./SettingPanel/SettingPanel";
import {IProfile} from "../../../types/IProfile";

interface Props {
    isAuth: boolean
    profileOwner: IProfile
}

const SettingArea = (props: Props) => {
    return (
        <div className={`${s.setting_area} setting_area`}>
            <SettingPanel/>
            { Object.keys(props.profileOwner).length ? <PhotoHeader {...props} /> : null}
        </div>
    )
}

export default SettingArea