import Image from "next/image";

export default function Home() {
  return (

    <div className="border border-blue-500">
      MAIN PAGE
      <div className="border border-red-500">
        Header
      </div>
      <div className="border border-red-500">
        Hero
        - Brand Tag
        - Title
        - Description
        - CTA x2
        - SkillsCounter
      </div>
      <div className="border border-red-500">
        Blog HIGHLIGHTS
        - Title
        - subtitle

        - Post Filters
        - Post Cards
        - CTA ( View All )
      </div>
      <div className="border border-red-500">
        CONTACT FORM
        - Subtitle
        - Title
        - CTA Text
        - Form Fields
        - CTA Submit
      </div>
      <div className="border border-red-500">
        BLOG SUBSCRIBE FORM
        - Title
        - Description
        - Email Input
        - CTA Submit
      </div>
      <div className="border border-red-500">
        FOOTER
        - Logo
        - Links
        - CTA Text
        - Icons
        - Socials
      </div>
      <div className="border border-red-500">
        Copyright
        - Copyright Text
        - Copyright Link
      </div>
    </div>
  );
}
