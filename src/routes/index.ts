import {ComponentType} from 'react';
import Login from '../pages/Login';
import Event from '../pages/Event';

export interface IRoute {
    path: string;
    component: ComponentType;
    exact?: boolean;
}

enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'

}

const publicRoutes: IRoute [] = [
    {path: RouteNames.LOGIN, exact: true, component: Login},
]
const privateRoutes: IRoute [] = [
    {path: RouteNames.EVENT, exact: true, component: Event},
]

export {
    publicRoutes,
    privateRoutes,
    RouteNames,
}
