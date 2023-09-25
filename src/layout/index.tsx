import React, {ReactNode} from "react";
import Header from "@/components/Header";
import "./styles.scss"

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <>
            <Header/>
            <main className={"layout"}>
                {children}
            </main>
        </>
    );
};

export default Layout;