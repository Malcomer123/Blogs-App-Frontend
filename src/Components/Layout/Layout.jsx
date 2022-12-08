import React from 'react'
import {Outlet} from 'react-router-dom'

function Layout() {
    return (
        <div>
            <div>test</div>
            <Outlet/>
            <div>testing again</div>
        </div>
    );
}

export default Layout;
