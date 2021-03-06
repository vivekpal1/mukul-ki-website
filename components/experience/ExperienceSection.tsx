import { Player } from "@lottiefiles/react-lottie-player";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const Sky = dynamic(() => import("./Sky"), { ssr: false });

export default function ExperienceSection() {
  const { resolvedTheme } = useTheme();

  return (
    // <section className="bg-white dark:bg-[#012038]" id="experience">
    <section className="bg-white dark:bg-gray-900" id="experience">
      <div className="container m-auto px-6 py-6 lg:px-20 lg:py-16">
        <div className="flex flex-col justify-between sm:flex-row">
          {/* UNCOMMENT TO ADD EXPERIENCE */}
          {/* <h2 className="flex items-center justify-center text-3xl sm:justify-start lg:py-6 lg:text-5xl">
            <strong className="py-6 text-4xl text-queen-500 lg:text-6xl">
              5
            </strong>
            &nbsp; Year Experience
          </h2> */}
          <div className="flex justify-center">
            <Player autoplay loop src="/lottie/sky.json"></Player>
          </div>
        </div>
      </div>
    </section>
  );
}
