import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPhotos, IProfile} from "../types/IProfile";
import photoUser from '../assets/images/photo-user.jpg'

const initialState = {
    posts: [
        {
            id: 0,
            message: 'Hi, how are you?',
            likeCount: 10,
            userName: 'cat griffith',
            commentsCount: 5,
            viewsCount: 9,
            shareCount: 1,
            date: '02.06.2018, 19:20',
            isLiked: false,
            photo: photoUser
        },
        {
            id: 1,
            message: 'It\'s my first post',
            likeCount: 5,
            userName: 'cat griffith',
            commentsCount: 3,
            viewsCount: 7,
            shareCount: 2,
            date: '02.06.2018, 19:20',
            isLiked: true,
            photo: photoUser
        },
        {
            id: 2,
            message: 'Helo!',
            likeCount: 7,
            userName: 'cat griffith',
            commentsCount: 1,
            viewsCount: 21,
            shareCount: 0,
            date: '02.06.2018, 19:20',
            isLiked: false,
            photo: photoUser
        },
        {
            id: 3,
            message: 'Hi, how are you?',
            likeCount: 14,
            userName: 'cat griffith',
            commentsCount: 15,
            viewsCount: 20,
            shareCount: 3,
            date: '02.06.2018, 19:20',
            isLiked: false,
            photo: photoUser
        },
    ],
    profile: {} as IProfile,
    status: '',
    photo: {} as IPhotos,
    editModeProfile: false,
    profileOwner: {} as IProfile,
    error: '' as string | null,
    openPhoto: false
}

export type ProfileStateType = typeof initialState;

const createNewPost = (id: number,message: string,
                       userName: string, date: string, photo: string) => ({
    id,
    message,
    likeCount: 0,
    userName,
    commentsCount: 0,
    viewsCount: 0,
    shareCount: 0,
    date,
    isLiked: false,
    photo
})

const getDate = () => {
    const today = new Date();
    return today.toLocaleString();
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addPost: (state, action:PayloadAction<string>) => {
            const newPost = createNewPost(state.posts.length, action.payload,
                state.profileOwner.fullName, getDate(), state.profileOwner.photos.small)
            state.posts = ([newPost, ...state.posts])
        },
        setUsersProfile: (state, action: PayloadAction<IProfile>) => {
            state.profile = action.payload
        },
        setOwnerProfile: (state, action: PayloadAction<IProfile>) => {
            state.profileOwner = action.payload
        },
        setUsersStatus: (state, action: PayloadAction<string>) => {
            state.status = action.payload
        },
        deletePost: (state, action: PayloadAction<number>) => {
            state.posts = state.posts.filter(p => p.id !== action.payload)
        },
        savePhotoSuccess: (state, action: PayloadAction<IPhotos>) => {
            state.photo = action.payload
        },
        updateProfileInfoSuccess: (state, action: PayloadAction<IProfile>) => {
            state.profile = action.payload
        },
        changeEditModeProfile: (state, action: PayloadAction<boolean>) => {
            state.editModeProfile = action.payload
        },
        setErrorInStatus: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        },
        changeIsLiked: (state, action: PayloadAction<number>) => {
            state.posts.map(p => {
                if (p.id === action.payload) {
                    if (p.isLiked) {
                        p.isLiked = false
                        p.likeCount -= 1
                    } else {
                        p.isLiked = true
                        p.likeCount += 1
                    }
                }
                return p
            })
        },
        setOpenPhoto: (state, action: PayloadAction<boolean>) => {
            state.openPhoto = action.payload
        }
    }
})

export const {addPost, setUsersProfile, setOwnerProfile, setUsersStatus, deletePost, savePhotoSuccess,
    updateProfileInfoSuccess, changeEditModeProfile, setErrorInStatus, changeIsLiked,setOpenPhoto } = profileSlice.actions

export default profileSlice.reducer
