"use client";
import { Button , Card, Flex, Typography } from "antd";
import { PlaceholdersAndVanishInput } from "@/app/components/vanishInput";

export default function ChatPage() {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Input changed:", e.target.value);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted!");
    };

    const placeholders = ["Ask", "Know", "Placeholder 3"];
    
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
                        onChange={handleInputChange}
                        onSubmit={handleFormSubmit}
                    />
                </Flex>
            </Card>
        </div>
    );
}