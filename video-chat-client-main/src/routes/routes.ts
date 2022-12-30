import React from "react";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Room from "../pages/Room";
import Settings from "../pages/Settings";
import Home from "../pages/Home";
import News from "../pages/News";
import Notes from "../pages/Notes";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    SETTINGS = '/settings',
    ROOM = '/room',
    REG = '/registration',
    LOGIN = '/login',
    NEWS = '/news',
    NOTES = '/notes',
    HOME = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.REG, exact: true, component: Registration},
    {path: RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.SETTINGS, exact: true, component: Settings},
    {path: RouteNames.ROOM+'/:id', component: Room},
    {path: RouteNames.NEWS, component: News},
    {path: RouteNames.NOTES, component: Notes},
    {path: RouteNames.HOME, exact: true, component: Home}
]
