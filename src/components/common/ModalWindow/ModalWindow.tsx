import React, {ReactElement} from "react";
import style from "./modalWindow.module.scss"
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setOpenPhoto} from "../../../store/profileSlice"

interface Props {
    children: ReactElement
}

function ModalWindow({children}: Props) {

    const dispatch = useAppDispatch()
    const openPhoto = useAppSelector((state) => state.profile.openPhoto)

    const closePhoto = () => {
        dispatch(setOpenPhoto(false))
    }

    return <div className={openPhoto ? `${style.modal} ${style.modal_active} content` : `${style.modal}`}
                onClick={closePhoto}>
        <div className={openPhoto ? `${style.modal_content} ${style.content_active}` : `${style.modal_content}`}
             onClick={(e) => e.stopPropagation()}>
            {children}
        </div>

    </div>
}

export default ModalWindow