import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <h1>From Layout</h1>
            <p>Before Outlet</p>
            <Outlet />
            <p>After Outlet</p>
        </div>
    )
}

export default Layout;