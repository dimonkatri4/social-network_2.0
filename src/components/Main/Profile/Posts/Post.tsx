import React from 'react';
import {IPost} from "../../../../types/IPost";
import style from './post.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import {useAppDispatch} from "../../../../hooks/redux";
import { changeIsLiked } from '../../../../store/profileSlice';

interface Props {
    post: IPost
}

const Post = ({post}: Props) => {

    const dispatch = useAppDispatch()

    const changeLike = () => {
        dispatch(changeIsLiked(post.id))
    }

    return (
        <div className={`${style.item} profile_block`}>
            <div className={style.caption}>
                <img src={post.photo} alt="userPhoto"/>
                <div className={style.userName}>{post.userName}</div>
                <div className={style.date}>Published: {post.date}</div>
            </div>
            <div className={style.message}>{post.message}</div>
            <div className={style.post_panel}>
                <ul>
                    <li>
                        <div className={classNames(style.like, style.panelIcon)} onClick={changeLike}>
                            <FontAwesomeIcon icon={post.isLiked ? ["fas", "heart"] : ["far", "heart"]}/>
                        </div>
                        <span>{post.likeCount}</span>
                    </li>
                    <li>
                        <div className={style.panelIcon}><FontAwesomeIcon icon={["far", "eye"]}/></div>
                        <span>{post.viewsCount}</span>
                    </li>
                    <li>
                        <div className={style.panelIcon}><FontAwesomeIcon icon={["far", "comment"]}/></div>
                        <span>{post.commentsCount}</span>
                    </li>
                    <li>
                        <div className={classNames(style.share, style.panelIcon)}><FontAwesomeIcon
                            icon={["far", "share-square"]}/></div>
                        <span>{post.shareCount}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Post;