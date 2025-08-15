import Image from "next/image";
import MainHero from "./components/MainHero";
import BlogPreview from "./components/BlogPreview";
import ContactCTA from "./components/ContactCTA";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (

    <div>
      <MainHero 
      isHome={true}
      brandTag={{
        label: "Premium Digital Services",
        icon: <Sparkles/>
      }}
      heading={{
        prefix: "We are",
        highlight: "Matte Digital",
      }}
      subtitle="crafting digital experiences that turn ideas into"
      hasSparkleText={true}
      sparkleText="success"
      description="Specializing in Next.js development, MVP prototyping, and creating beautiful user experiences. We help businesses transform their ideas into pixel-perfect digital products that drive growth."
      stats={[
        {
          value: "50+",
          label: "Projects Delivered"
        },
        {
          value: "3+",
          label: "Years Experience"
        },
        {
          value: "100%",
          label: "Client Satisfaction"
        }
      ]}
      buttonGroup={[
        {
          label: "View My Work",
          size: "lg",
          iconAfter: <ArrowRight/>
        },
        {
          label: "Read My Blog",
          size: "lg",
          variant: "secondary"
        }
      ]}
      />
      <BlogPreview/>
     <ContactCTA/>
    </div>
  );
}
