"use client";

import { ClerkProvider } from '@clerk/nextjs'

export default function ClerkProviderC({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            {children}
        </ClerkProvider>
    );
}