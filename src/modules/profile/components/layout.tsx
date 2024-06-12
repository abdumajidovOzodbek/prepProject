import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const UserLayout: React.FC = () => {
    return (

        <>
            <Header />
            <div className="mt-20">
            <Outlet />
            </div>
            <Footer/>
        </>


    );

}

export default UserLayout;
