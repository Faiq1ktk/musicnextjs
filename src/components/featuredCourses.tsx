import React from 'react'
import music_courses from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function featuredCourses() {
  console.log(music_courses);

  const featuredCourses = music_courses.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 text-white bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>

          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Discover our most popular music courses
          </p>
        </div>
      </div>

      <div className="mt-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
    {featuredCourses.slice(0, 3).map((course: Course) => (
      <div key={course.id} className="flex justify-center">
        <BackgroundGradient
  className="flex h-full w-full max-w-sm flex-col overflow-hidden rounded-[22px] bg-black"
>
  <div className="flex h-full flex-col items-center p-6 text-center">

   

    <h3 className="mt-6 min-h-15 text-2xl font-bold text-white">
      {course.title}
    </h3>

    <p className="mt-4 grow text-sm leading-7 text-neutral-400">
      {course.description}
    </p>

    <div className="mt-6">
      <p className="text-2xl font-bold text-white">
        ${course.price}
      </p>
    </div>

 <Link
  href={`/courses/${course.slug}`}
  className="mt-6 inline-flex items-center justify-center rounded-full border border-white bg-black px-7 py-3 font-semibold text-white! transition-all duration-300 hover:bg-white! hover:text-black! hover:scale-105"
>
  View Course →
</Link>
  </div>
</BackgroundGradient>
      </div>
    ))}
  </div>
</div>
      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="inline-block rounded-md bg-black px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-gray-600 hover:scale-105"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default featuredCourses;