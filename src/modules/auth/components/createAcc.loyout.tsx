import React from "react";
import { Outlet } from "react-router-dom";
import Advers from "./welcome";

const Layout: React.FC = () => {
    return (
        <div>
            <div className="flex gap-5 bg-indigo-50 max-md:flex-col max-md:gap-0">
                <Advers />
                <Outlet />
            </div>
        </div>

    );

}

export default Layout;
