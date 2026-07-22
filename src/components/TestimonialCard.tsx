"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "As a pianist, this academy helped me improve my confidence and technique. Every lesson was engaging, practical, and inspiring.",
    name: "Sophia Bennett",
    title: "Piano Student",
  },
  {
    quote:
      "Learning guitar here has been an incredible journey. The instructors are patient, supportive, and truly passionate about music.",
    name: "Liam Carter",
    title: "Guitar Student",
  },
  {
    quote:
      "The vocal training program transformed my singing abilities. I now perform confidently thanks to the amazing mentorship.",
    name: "Olivia Harris",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
  {
    quote:
      "The drum lessons are structured and easy to follow. I've gained confidence, rhythm, and performance skills in just a few months.",
    name: "Daniel Cooper",
    title: "Drum Student",
  },
  {
    quote:
      "I always dreamed of writing my own songs. The songwriting classes gave me the tools and confidence to bring my ideas to life.",
    name: "Ava Mitchell",
    title: "Songwriting Student",
  },
  {
    quote:
      "The saxophone instructors are incredibly knowledgeable and encouraging. Every class motivates me to practice even more.",
    name: "Noah Richardson",
    title: "Saxophone Student",
  },
  {
    quote:
      "This academy made learning music theory enjoyable and practical. It has helped me become a much better performer.",
    name: "Grace Collins",
    title: "Music Theory Student",
  },
  {
    quote:
      "The cello program exceeded my expectations. The personalized guidance has improved both my technique and confidence.",
    name: "Benjamin Foster",
    title: "Cello Student",
  },
  {
    quote:
      "From beginner to performing on stage, this school has been with me every step of the way. I couldn't ask for better teachers.",
    name: "Charlotte Evans",
    title: "Performance Student",
  },
  {
    quote:
      "The keyboard classes are interactive and fun. I now play my favorite songs with confidence thanks to the supportive instructors.",
    name: "James Walker",
    title: "Keyboard Student",
  },
  {
    quote:
      "Every lesson is filled with creativity and encouragement. The teachers genuinely care about helping students achieve their goals.",
    name: "Ella Thompson",
    title: "Music Student",
  },
  {
    quote:
      "Joining this academy was the best decision I made. The welcoming environment and expert instructors make learning enjoyable every day.",
    name: "William Scott",
    title: "Beginner Music Student",
  },
  {
    quote:
      "The mentorship, community, and hands-on learning experience have helped me grow both as a musician and as a performer.",
    name: "Mia Anderson",
    title: "Advanced Music Student",
  },
];

function MusicSchoolTestimonial() {
  return (
    <section className="relative overflow-hidden bg-black py-24">

      {/* Grid Background */}
      <div
  className="pointer-events-none absolute inset-0 [background-size:20px_20px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
/>

      {/* Radial Fade */}
      <div className="pointer-events-none absolute inset-0 [background-size:20px_20px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />

      {/* Content */}
      <div className="relative z-10">

        <h2 className="mb-12 text-center text-5xl font-bold text-white">
          Hear our Harmony: Voices Of Success
        </h2>

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />

      </div>
    </section>
  );
}

export default MusicSchoolTestimonial;