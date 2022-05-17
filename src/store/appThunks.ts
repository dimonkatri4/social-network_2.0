import { initializedSuccess } from "./appSlice";
import { getAuthUserData } from "./authThunks";
import {AppDispatch} from "./store";

export const initializeApp = () => async (dispatch: AppDispatch) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess());
}