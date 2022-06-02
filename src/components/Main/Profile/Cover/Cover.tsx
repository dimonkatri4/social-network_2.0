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

function Cover(props: Props) {
    return (<>
            {!Object.keys(props.profile).length ? <Preloader/> :
                <div className={s.cover}>
                    <CoverPhoto/>
                    <MainPhoto photos={props.profile.photos} isOwner={props.isOwner}/>
                    <CoverInfo fullName={props.profile.fullName}
                               status={props.status}
                               isOwner={props.isOwner}
                               errorInStatus={props.errorInStatus}
                    />
                </div>}
        </>
    )
}

export default Cover