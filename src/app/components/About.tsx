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
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Sandesh
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                The Intelligent Email Assistant enhances productivity by automating email management tasks.
                It fetches emails, summarizes them using transformer models for concise overviews, and categorizes
                them into folders such as work, personal, and promotions. By prioritizing emails based on importance
                and suggesting quick responses through NLP models, it helps users focus on critical messages and respond
                swiftly. Advanced search and filtering options further streamline email organization, making it easier
                for users to navigate and manage their inbox efficiently. Overall, the assistant saves time and optimizes
                communication workflows, offering a valuable solution for handling email overload effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
