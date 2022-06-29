import React from 'react'
import s from "./coverInfo.module.scss"
import ProfileStatus from '../../ProfileStatus/ProfileStatus';

interface Props {
    fullName: string
    status: string
    isOwner: boolean
    errorInStatus: string | null
}

const CoverInfo = React.memo(function CoverInfo({status,isOwner,errorInStatus,fullName}: Props) {
    return (
        <div className={s.cover_info}>
            <div className={s.nameWithStatus}>
                <div className={s.user_name}>{fullName}</div>
                <ProfileStatus status={status}
                                       isOwner={isOwner}
                                       errorInStatus={errorInStatus}
                />
            </div>
        </div>
    )
})

export default CoverInfo