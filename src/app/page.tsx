import HeroSection from "@/components/Herosection";
import FeaturedCourses from "@/components/featuredCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonial from "@/components/TestimonialCard";
import GridBackgroundDemo from "@/components/grid-background-demo";
import UpcomingWibenars from "@/components/ui/UpcomingWibenars";

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
    </main>
  );
}