import React from "react";
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import LoginView from "./views/loginview/LoginView";
import HomeView from "./views/HomeView/HomeView";

type RouteType = {
    path: string;
    component: React.ReactNode;
}

const routes: RouteType[] = [
    { path: '/login', component: <LoginView /> },
    { path: '/home', component: <HomeView /> },
];

const Routes: React.FC = () => {
    return (
        <RouterRoutes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} />
            ))}
        </RouterRoutes>
    );
}

export default Routes;