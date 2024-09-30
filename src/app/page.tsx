"use client";

import React from "react";
import {Navbar} from "../app/components/Navbar";
import { About } from "../app/components/About";
import { Hero } from "../app/components/Hero";
import { ScrollToTop } from "../app/components/ScrollToTop"
import {  useUser } from '@clerk/nextjs';

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
            <Navbar usernames={username}/>
            <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <Hero usernames={username}/> 
            </div>
            <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <About />
            </div>

            <ScrollToTop/>
        </>
    );
}


