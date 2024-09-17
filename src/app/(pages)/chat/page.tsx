"use client";
import { UserButton } from "@clerk/nextjs";
import { Button, Card, Input, Avatar } from "antd";
import { useState } from "react";
import { Flex } from "antd";
import { PlaceholdersAndVanishInput } from "@/app/components/vanishInput";
import { UserOutlined, RobotOutlined } from "@ant-design/icons";

export default function ChatPage() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<
    { text: string; sender: "human" | "bot" }[]
  >([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBotResponse = async (userMessage: string) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userMessage }),
      });

      const data = await response.json();
      const botResponse = data.response;

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error:", error);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error: Unable to get response from the bot.", sender: "bot" },
      ]);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: "human" },
      ]);
      handleBotResponse(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen w-full dark:bg-black bg-black dark:bg-grid-black/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center p-4">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

      <Card
        className="w-full max-w-[900px] rounded-[30px] h-auto min-h-[80vh]"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Flex justify="center" align="center" vertical className="h-full">
          <div className="text-center mb-6">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Your <span className="glow">Personal</span>
              <br />
              AI Advisor
            </h1>
          </div>
          <Card
            className="w-full max-w-[850px] bg-transparent border-none h-[60vh] overflow-y-auto flex flex-col p-2 md:p-4"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "human" ? "justify-end" : "justify-start"} items-center mb-3`}
              >
                {msg.sender === "bot" && (
                  <Avatar
                    className="mr-2"
                    style={{
                      backgroundColor: "#f56a00",
                    }}
                    icon={<RobotOutlined />}
                  />
                )}
                <div
                  className={`px-3 py-2 rounded-2xl text-sm md:text-base max-w-[75%] break-words ${
                    msg.sender === "human" ? "bg-[#1d1d25] text-white" : "bg-[#ffffff43] text-white"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "human" && (
                  <div className="ml-2">
                    <UserButton />
                  </div>
                )}
              </div>
            ))}
          </Card>
          <div className="w-full max-w-[850px]">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </Flex>
      </Card>
    </div>
  );
}