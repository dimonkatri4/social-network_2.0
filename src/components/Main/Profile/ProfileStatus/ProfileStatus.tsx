import React, {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {faTimes, faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import style from "./profileStatus.module.scss"
import {useAppDispatch} from "../../../../hooks/redux";
import {setErrorInStatus} from "../../../../store/profileSlice";
import {updateStatus} from "../../../../store/profileThunks";

interface Props {
    status: string
    isOwner: boolean
    errorInStatus: string | null
}

function ProfileStatus({errorInStatus,isOwner,status}: Props) {

    const dispatch = useAppDispatch()

    const [editMode, setEditMode] = useState(false)
    const [statusText, setStatusText] = useState(status)

    useEffect(() => {
        setStatusText(status)
        dispatch(setErrorInStatus(null))
    }, [status, editMode])

    const useOutsideClick = (ref: React.RefObject<HTMLInputElement>) => {
        useEffect(() => {
            // Edit state if clicked on outside of element
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const handleClickOutside = (e: any) => {
                if (ref.current) {
                    if (editMode && !ref.current.contains(e.target)) {
                        exitOfInputStatus();
                    }
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }, [ref, editMode]);
    }
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const updateProfileStatus = () => {
        dispatch(updateStatus(statusText))
        if (statusText.length <= 300) {
            setEditMode(false)
        } else {
            dispatch(setErrorInStatus(null))
        }
    }
    const exitOfInputStatus = () => {
        setEditMode(false);
        setStatusText(status);
    }

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setStatusText(text);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleKeyDown = (e: any) => {
        e.key === 'Enter' && updateProfileStatus();
        e.key === 'Escape' && exitOfInputStatus();
    }

    return <div className={style.statusBlock}>
        {!editMode &&
        <span className={style.textStatus} onDoubleClick={isOwner ? activateEditMode : undefined}
              title="Double click to change status">{status
        || isOwner && <span className={style.addStatus}>Double click to add status</span>} </span>
        }
        {editMode &&
        <div className={style.inputBlock} ref={wrapperRef}>
            <input className={classNames("inputPlace", style.inputStatus)} onChange={onStatusChange}
                   autoFocus value={statusText} onKeyDown={handleKeyDown}/>
            <span className={style.updateStatus}><FontAwesomeIcon icon={faCheck} onClick={() => updateProfileStatus()}/></span>
            <span className={style.close}><FontAwesomeIcon icon={faTimes} onClick={exitOfInputStatus}/></span>
        </div>
        }
        {
            errorInStatus && <div className={style.error}>{errorInStatus}</div>
        }
    </div>
}

export default ProfileStatus