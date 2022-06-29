import { RootState } from "../store";

export const getIsAuthSelector = (state: RootState) => state.auth.isAuth
export const getUserIdSelector = (state: RootState) => state.auth.userId