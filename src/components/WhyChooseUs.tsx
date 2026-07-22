"use client";

import React from "react";
import Image from "next/image";
import music_courses from "@/data/music_courses.json";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const stickyContent = music_courses.courses
  .slice(0, 10)
  .map((course: Course) => ({
    title: course.title,
    description: `${course.description} Learn directly from ${course.instructor} and master this course for only $${course.price}.`,

    content: course.image ? (
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-black p-6">
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={400}
          className="h-auto w-full max-w-65 object-contain"
          priority
        />
      </div>
    ) : null,
  }));

function WhyChooseUs() {
  return (
    <section className="w-full">
      <StickyScroll content={stickyContent} />
    </section>
  );
}

export default WhyChooseUs;