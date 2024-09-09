"use client";
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

  const handleBotResponse = (userMessage: string) => {
    // Simulate a bot response after user submits a message
    const botResponse = `You said: "${userMessage}", here's my response.`;
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: botResponse, sender: "bot" },
    ]);
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
    <div className="h-[50rem] w-full dark:bg-black bg-black  dark:bg-grid-black/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

      <Card
        style={{
          backgroundColor: "transparent",
          width: "900px",
          borderRadius: "30px",
          height: "900px",
        }}
      >
        <Flex justify="center" align="center" vertical>
          <h1
            style={{
              color: "white",
              fontSize: "65px",
              fontWeight: "600",
              marginBottom: "-30px",
            }}
          >
            Your <span className="glow">Personal</span>
          </h1>
          <h1
            style={{
              color: "white",
              fontSize: "65px",
              fontWeight: "600",
            }}
          >
            AI Advisor
          </h1>
          <Card
            style={{
              width: "850px",
              backgroundColor: "transparent",
              border: "none",
              height: "600px",
              overflowY: "scroll",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: msg.sender === "human" ? "flex-end" : "flex-start",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                {msg.sender === "bot" && (
                  <Avatar
                    style={{
                      backgroundColor: "#f56a00",
                      marginRight: "10px",
                    }}
                    icon={<RobotOutlined />}
                  />
                )}
                <div
                  style={{
                    backgroundColor: msg.sender === "human" ? "#1d1d25" : "#ffffff43",
                    color: msg.sender === "human" ? "white" : "white",
                    padding: "10px 15px",
                    borderRadius: "15px",
                    fontSize: "17px",
                    maxWidth: "75%",
                    wordWrap: "break-word",
                  }}
                >
                  {msg.text}
                </div>
                {msg.sender === "human" && (
                  <Avatar
                    style={{
                      backgroundColor: "#87d068",
                      marginLeft: "10px",
                    }}
                    icon={<UserOutlined />}
                  />
                )}
              </div>
            ))}
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
