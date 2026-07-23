import musicCoursesData from "@/data/music_courses.json";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

type MusicCourse = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
};

const courses = (musicCoursesData as { courses: MusicCourse[] }).courses;

const instructorItems = courses
  .filter((course) => course.isFeatured)
  .slice(0, 10)
  .map((course) => ({
    id: course.id,
    name: course.instructor,
    designation: course.title,
    image: course.image,
  }));

export default function InstructorsSection() {
  return (
    <section className="w-full bg-transparent px-4 py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
          Our instructors
        </p>

        <h2 className="mb-4 text-center text-3xl font-bold md:text-5xl">
          Meet our music professionals
        </h2>

        <p className="mb-12 max-w-2xl text-center text-gray-300">
          Hover over an instructor to see the course they teach.
        </p>

        <div className="flex max-w-full flex-wrap items-center justify-center gap-y-8 pr-4">
          <AnimatedTooltip items={instructorItems} />
        </div>
      </div>
    </section>
  );
}