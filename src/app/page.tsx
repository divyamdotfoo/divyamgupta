import { LinkCard } from "@/components/card";
import CodeSnap from "../../public/assets/codesnaps.png";
import LearnJavascript from "../../public/assets/learnjavascript.png";
import TodayILearned from "../../public/assets/til.png";
import Vibesnap from "../../public/assets/vibesnap.png";
export default function Page() {
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 gap-8 ">
      <LinkCard
        alt="some"
        description="Capture handwritten code snippets and run them instantly. Perfect for quick testing and bringing your ideas to life!"
        href="https://codesnaps.vercel.app/"
        img={CodeSnap}
        title="Codesnaps"
        tags={["Nextjs", "Google Vision"]}
      />

      <LinkCard
        alt="some"
        description="Craft and share your TIL moments with a sleek rich text and markdown editor. It&#39;s easy and powerful, perfect for capturing and showcasing your insights!"
        href="https://todayilearned.divyam.foo/"
        img={TodayILearned}
        title="Today I Learned"
        tags={["Nextjs", "Turso", "Drizzle", "MDX"]}
      />
      <LinkCard
        alt="some"
        description="Challenge yourself with JavaScript MCQs and runnable code snippets. Check answers in the browser and access questions in over 20 languages"
        href="https://play-with-javascript.vercel.app/"
        img={LearnJavascript}
        title="Learn Javascript"
        tags={["Nextjs", "Github"]}
      />
      <LinkCard
        alt="some"
        description="Turn your YouTube or Spotify playlists into a stunning mosaic of thumbnails. Watch your music collection come together in a visually engaging way"
        href="https://vibesnap.vercel.app/"
        img={Vibesnap}
        title="Vibesnap"
        tags={["Nextjs", "Youtube", "Spotify"]}
      />
    </div>
  );
}
