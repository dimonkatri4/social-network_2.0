import React from 'react';
import Header from "./Header";
import {useAppSelector} from "../../hooks/redux";

const HeaderContainer = () => {
    const {isAuth} = useAppSelector(state => state.auth);
    const profileOwner = useAppSelector(state => state.profile.profileOwner)
    return <Header isAuth={isAuth} profileOwner={profileOwner} />
};

export default HeaderContainer;