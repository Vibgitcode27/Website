import { Button, Modal } from 'antd';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { buttonVariants } from './ui/button';
import { HeroCards } from './HeroCards';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface HeroProps {
  username: string | null;
}

export const Hero = ({ usernames }: HeroProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [admin , setadmin] = useState(false);

  const router = useRouter();
  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleStartAsAdmin = () => {
    // Handle logic for starting as admin
    console.log('Start as admin');
    setModalVisible(false); // Close modal after action
    setadmin(true);
  };

  const handleStartChat = () => {
    // Handle logic for starting chat
    console.log('Start chat');
    setModalVisible(false); // Close modal after action
  };

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
            Govio
            </span>{' '}
            AI 
          </h1>{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Office
            </span>{' '}
            Assistant
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Govio is your smart, AI-powered office buddy for the public sector! It handles employee queries on HR, IT, and company stuff with lightning speed.
        </p>
       
        <div className="space-y-4 md:space-y-0 md:space-x-4"> 
          {usernames?<><Button className="w-full md:w-1/3" onClick={handleModalOpen}>
            Get Started
          </Button></> : <></>}
         

        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>

      {/* Ant Design Modal */}
      <Modal
        title="Choose an Option"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <Button className="w-full mb-2" onClick={handleStartAsAdmin}>
          Start as Admin
        </Button>
        <Button className="w-full" onClick={()=>router.push("/chat")}>
          Start Chat
        </Button>
      </Modal>

      {admin?<>  <div className="flex flex-col items-center space-y-4 mt-6" style={{marginRight:"280%" , marginTop:"-16%"}}>
          <button
            className="w-48 p-2 bg-black text-white"
            onClick={() => router.push("/upload")} 
          >
            Upload Files
          </button>
          <button
            className="w-48 p-2 bg-black text-white"
            onClick={() => router.push("/chat")} 
          >
            Start Chat
          </button>
         {/*  <button
            className="w-48 p-2 bg-black text-white"
            onClick={() => console.log('Another Option')}
          >
            Option 3
          </button> */}
        </div> </> : <></>}
    </section>
  );
};

