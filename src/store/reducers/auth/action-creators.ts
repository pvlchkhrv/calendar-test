import {AuthActionsEnum, SetErrorAction, SetIsAuthAction, SetIsLoadingAction, SetUserAction} from './types';
import {AppDispatch} from '../../index';
import axios from 'axios';
import {IUser} from '../../../models/IUser';


export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
    setIsAuth: (isAuth: boolean): SetIsAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: isAuth}),
    setError: (error: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload: error}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
        type: AuthActionsEnum.SET_IS_LOADING,
        payload: isLoading
    }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json');
                const mockUser = response.data.find(user => user.username === username && user.password === password);
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    dispatch(AuthActionCreators.setIsAuth(true));
                    dispatch(AuthActionCreators.setUser(mockUser));
                } else {
                    dispatch(AuthActionCreators.setError('Not correct username or password!'));
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            }, 1000);
        } catch (e) {
            dispatch(AuthActionCreators.setError('Error occurred when login'));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(() => {
                localStorage.removeItem('auth');
                localStorage.removeItem('username');
                dispatch(AuthActionCreators.setUser({} as IUser));
                dispatch(AuthActionCreators.setIsAuth(false));
                dispatch(AuthActionCreators.setIsLoading(false));
            }, 1000)
        } catch (e) {
            dispatch(AuthActionCreators.setError('Error occurred when logout'));
        }
    }
}
