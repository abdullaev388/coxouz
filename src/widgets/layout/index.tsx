import React from "react";

import {Header} from "./header";
import {Navbar} from "./navbar.tsx";
import {Footer} from "./footer.tsx";

export const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Header />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}