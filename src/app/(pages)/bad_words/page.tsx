"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flex } from "antd";
import { cn } from "@/lib/utils";
import { ModalProvider, Modal } from "@/app/components/ui/modal";
import { Skeleton3Content } from "@/app/components/uploadModal";
import { PlusCircle, X } from "lucide-react";

interface BadWord {
  id: number;
  word: string;
}

const BadWords: React.FC = () => {
  const [badWords, setBadWords] = useState<BadWord[]>([]);
  const [newWord, setNewWord] = useState<string>("");

  const addBadWord = () => {
    if (newWord.trim() !== "") {
      setBadWords([...badWords, { id: Date.now(), word: newWord.trim() }]);
      setNewWord("");
    }
  };

  const deleteBadWord = (id: number) => {
    setBadWords(badWords.filter((word) => word.id !== id));
  };

  return (
    <div className="min-h-screen w-full dark:bg-black bg-black dark:bg-grid-black/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center p-2 sm:p-4">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

      <ModalProvider>
        <Skeleton3Content />
      </ModalProvider>

      <Flex vertical justify="center" className="relative z-10 w-full max-w-4xl p-2 sm:p-4 md:p-8">
        <h1 className="text-white text-center text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">Bad Words</h1>
        
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between gap-2">
          <input
            type="text"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
            placeholder="Enter a bad word"
            className="flex-grow bg-white bg-opacity-10 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={addBadWord}
            className="bg-indigo-600 text-white px-3 py-2 text-sm sm:text-base rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
          >
            <PlusCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            Add Word
          </button>
        </div>

        <div className="w-full flex flex-wrap gap-2">
          <AnimatePresence>
            {badWords.map((badWord) => (
              <motion.div
                key={badWord.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "bg-indigo-500 bg-opacity-20 backdrop-blur-sm border border-indigo-500",
                  "rounded-full py-1 px-3 shadow-sm hover:shadow-md transition-all duration-300",
                  "flex items-center space-x-1"
                )}
              >
                <span className="text-white text-sm">{badWord.word}</span>
                <button
                  onClick={() => deleteBadWord(badWord.id)}
                  className="text-white hover:text-red-300 transition-colors duration-300"
                  aria-label="Delete word"
                >
                  <X className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Flex>
    </div>
  );
};

export default BadWords;