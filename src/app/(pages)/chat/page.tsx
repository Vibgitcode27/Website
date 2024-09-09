"use client";
import { Button , Card, Flex, Typography } from "antd";
import { PlaceholdersAndVanishInput } from "@/app/components/vanishInput";

export default function ChatPage() {
    const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
    
    return (
        <div className="h-[50rem] w-full dark:bg-black bg-black  dark:bg-grid-black/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
            
            <Card style={{ backgroundColor : "transparent" , width : "900px" , borderRadius : "30px" , height : "900px"}}>
                <Flex justify="center" align="center" vertical>
                    <h1 style={{ color : "white" , fontSize : "65px" , fontWeight : "600" , marginBottom : "-30px"}}>Your <span className="glow">Personal</span></h1>
                    <h1 style={{ color : "white" , fontSize : "65px" , fontWeight : "600"}}>AI Advisor</h1>
                    <Card style={{ width : "850px" , backgroundColor : "transparent" , border : "none" , height : "600px"}}>

                    </Card>
                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    />
                </Flex>
            </Card>
        </div>
    );
}