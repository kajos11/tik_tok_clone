
import Home from "./index";
import '../styles/globals.css';
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const MyApp = ({ Component, pageProps }: AppProps) => {
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        //client side react
        setIsSSR(false);
    }, []);

    if (isSSR) {
        return null;
    }

    return (
        <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}>
            <Navbar />
            <div className="flex gap-6 md:gap-20">
                <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
                    <Sidebar />
                </div>
                <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
                    <Component {...pageProps} />
                </div>
            </div>
        </GoogleOAuthProvider>)

}

export default MyApp;