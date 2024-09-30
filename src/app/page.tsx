"use client";

import React from "react";
import {Navbar} from "../app/components/Navbar";
import { About } from "../app/components/About";
import { FAQ } from "../app/components/FAQ";
import { Features } from "../app/components/Features";
import { Footer } from "../app/components/Footer";
import { Hero } from "../app/components/Hero";
import { HowItWorks } from "../app/components/HowItWorks";
import { Team } from "../app/components/Team";
import { ScrollToTop } from "../app/components/ScrollToTop"
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';

export default function App() {
    const { user } = useUser();
    const [username, setUsername] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (user) {
            setUsername(user.username);
        }
    }, [user]);

    return (
        <>  
            <Navbar/>
            <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <Hero/> 
            </div>
            <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <About />
            </div>

            <ScrollToTop/>
        </>
    );
}


















/* const { user } = useUser();
const [username, setUsername] = useState<string | null>(null);

useEffect(() => {
    if (user) {
        setUsername(user.username);
    }
}, [user]); */