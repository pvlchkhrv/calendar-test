import {IUser} from '../../../models/IUser';

interface AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}

export enum AuthActionsEnum {
    SET_AUTH = 'SET_AUTH',
    SET_ERROR = 'SET_ERROR',
    SET_USER = 'SET_USER',
    SET_IS_LOADING = 'SET_IS_LOADING',
}

interface SetIsAuthAction {
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}

interface SetErrorAction {
    type: AuthActionsEnum.SET_ERROR;
    payload: string;
}

interface SetUserAction {
    type: AuthActionsEnum.SET_USER;
    payload: IUser;
}

interface SetIsLoadingAction {
    type: AuthActionsEnum.SET_IS_LOADING;
    payload: boolean;
}

type AuthAction =
    | SetIsAuthAction
    | SetUserAction
    | SetIsLoadingAction
    | SetErrorAction

export type {
    AuthState,
    AuthAction,
    SetUserAction,
    SetIsAuthAction,
    SetErrorAction,
    SetIsLoadingAction
}
