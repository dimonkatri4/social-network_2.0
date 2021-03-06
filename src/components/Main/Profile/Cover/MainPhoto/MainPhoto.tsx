import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "./mainPhoto.module.scss"
import photoUser from '../../../../../assets/images/photo-user.jpg'
import {savePhoto} from "../../../../../store/profileThunks";
import {useAppDispatch} from "../../../../../hooks/redux";
import {IPhotos} from "../../../../../types/IProfile";
import { setOpenPhoto } from '../../../../../store/profileSlice';

interface Props {
    photos: IPhotos
    isOwner: boolean
}

const MainPhoto = React.memo(function MainPhoto({photos, isOwner}: Props) {

    const dispatch = useAppDispatch();

    const openPhoto = () => {
        dispatch(setOpenPhoto(true))
    }

    const updatePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return null
        } 
            dispatch(savePhoto(e.target.files[0]))
        
    }

    return (
        <div className={s.photoBlock}>
            <div className={s.main_photo} onClick={openPhoto}>
                <img src={photos.large || photoUser} alt=""/>
            </div>
            {isOwner && <div className={s.inputWrapper}>
                <input type="file" accept="image/*" id="inputPhoto" onChange={updatePhoto} className={s.inputTag}/>
                <label htmlFor="inputPhoto" className={s.inputPhoto}><FontAwesomeIcon icon='camera'/></label>
            </div>}
        </div>
    )
})

export default MainPhoto