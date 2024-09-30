"use client"
import React, { useState } from "react";
import { Flex, Image ,  message , Spin  } from "antd";
import { motion } from "framer-motion";
import { FileUpload } from "../components/ui/uploadComp";
import { ModalProvider, useModal } from "./ui/modal";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/modal";

import {
  IconFlag3Filled,
} from "@tabler/icons-react";


export function Skeleton3Content() {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const { setOpen } = useModal();

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Post created successfully!',
      });
    };

    const fail = () => {
      messageApi.open({
        type: 'error',
        content: 'Post Upload Failed!',
      });
    };

    const handleFileSelect = (uploadedFiles: File[]) => {
      if (uploadedFiles.length > 0) {
        setFile(uploadedFiles[0]);
      }
    };

    const handlePost = async () => {
      if (!file) {
        setError('Please select a file first.');
        return;
      }

      setIsLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append('photo', file);

      try {
        const response = await fetch('http://ec2-54-206-124-230.ap-southeast-2.compute.amazonaws.com:3000/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload file.');
        }

        const result = await response.json();
        console.log('File uploaded successfully', JSON.stringify(result.signedUrl));


        const createPostResponse = await fetch('http://ec2-54-252-151-126.ap-southeast-2.compute.amazonaws.com:3000/createPost', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email : "email", longitude: JSON.stringify(70.7970281), latitude: JSON.stringify(22.3675501), "image": result.signedUrl }),
        });

        if (!createPostResponse.ok) {
          throw new Error('Failed to create post.');
        }

        const createPostResult = await createPostResponse.json();
        console.log('Post created successfully', createPostResult);
        success();
      } catch (error) {
        console.error('Error:', error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
        fail();
      } finally {
        setIsLoading(false);
        setOpen(false);
      }
    };

  return (
    <Modal>
      {contextHolder}
      {/* <ModalTrigger className="relative group">
        <motion.div
          className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden"
          whileHover={{
            background: "linear-gradient(to bottom right,  #FFD700, #007BFF)",
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex items-center justify-center w-full h-full cursor-pointer">
            <motion.div
              className="flex flex-col items-center justify-center"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <motion.h1
                className="text-white"
                style={{ fontSize: '22px' , paddingTop : "10px" }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                Create Post here
              </motion.h1>
              <motion.h1
                className="text-white"
                style={{ fontSize: '65px', padding: "0px", margin: "0px" }}
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              >
                +
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>
      </ModalTrigger> */}
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Report
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              Accident {"  "}
            </span>
            {"  "}now!{"  "}<IconFlag3Filled style={{ display: "inline-block" }} />
          </h4>
          <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload onChange={handleFileSelect} />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </ModalContent>
        <ModalFooter className="gap-4">
          <button 
            className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
            onClick={handlePost}
            disabled={isLoading}
          >
            {isLoading ? <Spin /> : 'Post'}
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}