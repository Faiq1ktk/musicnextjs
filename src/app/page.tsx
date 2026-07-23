import HeroSection from "@/components/Herosection";
import FeaturedCourses from "@/components/featuredCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonial from "@/components/TestimonialCard";
import GridBackgroundDemo from "@/components/grid-background-demo";
import InstructorsSection from "@/components/InstructorsSection";
import UpcomingWibenars from "@/components/ui/UpcomingWibenars";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <main className="min-h-screen">
      <GridBackgroundDemo>
        <HeroSection />
      </GridBackgroundDemo>

      <WhyChooseUs />

      <FeaturedCourses />

      <MusicSchoolTestimonial />

      <UpcomingWibenars />

      <WavyBackground
        backgroundFill="#000000"
        colors={[
          "#38bdf8",
          "#818cf8",
          "#c084fc",
          "#e879f9",
          "#22d3ee",
        ]}
        waveWidth={45}
        blur={10}
        speed="fast"
        waveOpacity={0.45}
        containerClassName="h-auto min-h-[550px]"
        className="w-full"
      >
        <InstructorsSection />
      </WavyBackground>
    </main>
  );
}