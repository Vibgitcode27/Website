"use client";

import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';

export default function Home() {
    const { user } = useUser();
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            setUsername(user.username);
        }
    }, [user]);

    return (
        <div>
            <header>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                    <p>Welcome, {username}!</p>
                </SignedIn>
            </header>
            <h1>This is the home page</h1>
        </div>
    );
}
