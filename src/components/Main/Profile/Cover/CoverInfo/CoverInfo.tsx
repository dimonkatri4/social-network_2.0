import React from 'react'
import s from "./coverInfo.module.scss"
import ProfileStatus from '../../ProfileStatus/ProfileStatus';

interface Props {
    fullName: string
    status: string
    isOwner: boolean
    errorInStatus: string | null
}

function CoverInfo(props: Props) {
    return (
        <div className={s.cover_info}>
            <div className={s.nameWithStatus}>
                <div className={s.user_name}>{props.fullName}</div>
                <ProfileStatus status={props.status}
                                       isOwner={props.isOwner}
                                       errorInStatus={props.errorInStatus}
                />
            </div>
        </div>
    )
}

export default CoverInfo