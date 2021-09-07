interface AuthState{
    isAuth: boolean;
}

export enum AuthActionsEnum {
    SET_AUTH = 'SET_AUTH'
}

interface SetAuthAction{
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}

type AuthAction =
    | SetAuthAction

export type {
    AuthState,
    AuthAction
}
