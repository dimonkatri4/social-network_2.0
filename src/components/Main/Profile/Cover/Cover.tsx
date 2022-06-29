import React from 'react'
import CoverInfo from './CoverInfo/CoverInfo'
import CoverPhoto from './CoverPhoto/CoverPhoto'
import MainPhoto from './MainPhoto/MainPhoto'
import s from "./cover.module.scss"
import Preloader from "../../../common/Preloader/Preloader";
import {IProfile} from "../../../../types/IProfile";

interface Props {
    profile: IProfile
    status: string
    isOwner: boolean
    errorInStatus: string | null
}

const Cover = React.memo(function Cover({errorInStatus,isOwner,status,profile}: Props) {
    return (<>
            {!Object.keys(profile).length ? <Preloader/> :
                <div className={s.cover}>
                    <CoverPhoto/>
                    <MainPhoto photos={profile.photos} isOwner={isOwner}/>
                    <CoverInfo fullName={profile.fullName}
                               status={status}
                               isOwner={isOwner}
                               errorInStatus={errorInStatus}
                    />
                </div>}
        </>
    )
})

export default Cover