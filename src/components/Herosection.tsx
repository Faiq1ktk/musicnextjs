import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="relative h-screen md:h-160 w-full overflow-hidden rounded-md flex flex-col items-center justify-center mx-auto">
   <Spotlight
  className="
    absolute

    left-1/2
    -top-60
    -translate-x-1/2

    w-225
    h-225

    sm:-top-80
    sm:w-237.5
    sm:h-237.5

    md:left-60
    md:-top-30
    md:translate-x-0
    md:w-300
    md:h-300

    lg:left-72
    lg:-top-25
    lg:w-325
    lg:h-325
  "
  fill="white"
/>
      <div className="relative z-10 w-full p-4 text-center">
        <h1 className="mt-20 bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:mt-0 md:text-7xl">
          Turn Sound Into Art
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base font-normal text-neutral-300 md:text-lg">
          From music theory to professional production, discover courses
          crafted to help you compose, perform, and create without limits.
          Let every note tell your story, and every melody awaken the artist
          within. Step into a world where passion becomes rhythm and dreams
          turn into sound.
        </p>

        <div className="mt-8 flex justify-center">
  <Link href="/courses">
  <Button
    duration={3000}
    borderRadius="9999px"
    className="bg-black text-white"
  >
    Start Your Journey
  </Button>
</Link>
</div>
      </div>
    </div>
  );
}

export default HeroSection;