import React from 'react'
import s from './coverPhoto.module.scss'
import coverPhoto from '../../../../../assets/images/cover-photo.jpg'

function CoverPhoto() {
    return (
        <div className={s.cover_photo}>
            <img src={coverPhoto} alt="" />
        </div>
    )
}

export default CoverPhoto
