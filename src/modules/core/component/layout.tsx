import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import AuthProvider from "../../auth/components/AuthProvider";

const UserLayout: React.FC = () => {
    return (

        <>
            <Header />
            <div className="mt-20">
                <AuthProvider>
                    <Outlet />
                </AuthProvider>
            </div>
            <Footer />
        </>


    );

}

export default UserLayout;
