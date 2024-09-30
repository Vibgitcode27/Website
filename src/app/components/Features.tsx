import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import image from "@/public/assets/growth.png";
import image3 from "@/public/assets/reflecting.png";
import image4 from "@/public/assets/looking-ahead.png";
import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Email Summarization",
    description:
      "Automatically generates concise summaries of long emails using advanced transformer models. This helps users " +
        "quickly grasp the key points of lengthy communications without having to read through entire messages.",
    image: image4,
  },
  {
    title: "Email Prioritization",
    description:
      "Automatically categorizes incoming emails into predefined folders such as work, personal, and promotions. " +
        "It also prioritizes emails based on importance and user-defined rules, ensuring that users can focus on critical " +
        "messages promptly",
    image: image3,
  },
  {
    title: "Suggested Responses",
    description:
      "Utilizes natural language processing (NLP) models to suggest responses to common types of emails. This " +
        "feature provides users with quick reply options, enhancing response efficiency and reducing the time spent on " +
        "composing replies manually.",
    image: image,
  },
];

const featureList: string[] = [
  "Fetches emails",
  "Summarizes content",
  "Categorizes messages",
  "Generates responses",
  "Prioritizes based on rules",
  "Enhances productivity",
  "Streamlines management",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <Image
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
