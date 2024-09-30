"use client";

import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { LogoIcon } from "./Icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { user } = useUser();
  const [username, setUsername] = useState<string | null>(null);

useEffect(() => {
      if (user) {
          setUsername(user.username);
      }
  }, [user]);

  return (
      <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background" style={{background:"black"}}>
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
            <NavigationMenuItem className="font-bold flex">
              <a
                  rel="noreferrer noopener"
                  href="/"
                  className="ml-2 font-bold text-xl flex"
              >
                <LogoIcon />
                SANDESH
              </a>
            </NavigationMenuItem>

            {/* mobile */}
            {isClient && (
                <span className="flex md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="px-2">
                  <Menu className="h-5 w-5">
                    <span className="sr-only">Menu Icon</span>
                  </Menu>
                </SheetTrigger>

                <SheetContent side={"left"}>
                  <SheetHeader>
                    <SheetTitle className="font-bold text-xl">Sandesh</SheetTitle>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </span>
            )}

            {/* desktop */}

            <div className="hidden md:flex gap-2">
              {username?<> <SignedIn>
                    <UserButton />
                    <p> {username}!</p>
                </SignedIn></>
                :
                <>
               <SignedOut>
                    <SignInButton />
                </SignedOut></>
                }
           
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
  );
};
