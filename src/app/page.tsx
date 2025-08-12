import Image from "next/image";
import MainHero from "./components/MainHero";
import BlogPreview from "./components/BlogPreview";
import ContactCTA from "./components/ContactCTA";

export default function Home() {
  return (

    <div>
      <MainHero/>
      <BlogPreview/>
     <ContactCTA/>
    </div>
  );
}
