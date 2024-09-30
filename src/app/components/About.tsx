import pilot from "@/public/assets/pilot.png";
import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text" style={{color:"white"}}>
                  About{" "}
                </span>
                Govio
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Govio is your smart, AI-powered assistant designed to handle all your organizational queries with ease and speed. From HR policies and IT support to company events, Govio has you covered. Built with cutting-edge NLP and deep learning, it understands and responds to employee questions, ensuring quick, accurate solutions. Plus, Govio’s document processing capabilities allow it to extract, summarize, and analyze important information from any document you upload.

Scalable to handle multiple users at once, Govio delivers a smooth experience with response times under 5 seconds. Security is key, with 2-factor authentication ensuring that access stays safe, while an inbuilt filter keeps the chat professional by blocking inappropriate language. Govio is your go-to virtual assistant for navigating the complexities of the workplace!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
