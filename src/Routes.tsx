import React from "react";
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import LoginView from "./views/loginview/LoginView";
import HomeView from "./views/HomeView/HomeView";
import Pools from "./components/pools/Pools";
import Picks from "./components/picks/Picks";

type RouteType = {
    path: string;
    component: React.ReactNode;
}

const routes: RouteType[] = [
    { path: '/login', component: <LoginView /> },
    { path: '/home', component: <HomeView /> },
];

const Routes = () => {
    return (
        <RouterRoutes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} />
            ))}
        </RouterRoutes>
    );
}

export default Routes;