import Link from "next/link"
// import { AnimatePresence, motion } from "motion/react";
import { HoverEffect } from "./card-hover-effect";

function UpcomingWibenars() {
   const webinars = [
  {
    title: "Mastering Piano Fundamentals",
    description:
      "Build a strong foundation in piano with finger exercises, rhythm training, and beginner-friendly techniques.",
    slug: "/webinars/mastering-piano-fundamentals",
    asFeatured: true,
    link: "/webinars/mastering-piano-fundamentals",
  },
  {
    title: "Acoustic Guitar Essentials",
    description:
      "Learn chords, strumming patterns, and practical techniques to confidently play your favorite songs.",
    slug: "/webinars/acoustic-guitar-essentials",
    asFeatured: true,
    link: "/webinars/acoustic-guitar-essentials",
  },
  {
    title: "Professional Vocal Training",
    description:
      "Improve breathing, pitch control, vocal range, and performance skills with expert guidance.",
    slug: "/webinars/professional-vocal-training",
    asFeatured: true,
    link: "/webinars/professional-vocal-training",
  },
  {
    title: "Music Production with Modern DAWs",
    description:
      "Discover how to compose, record, mix, and produce professional-quality music using today's popular software.",
    slug: "/webinars/music-production",
    asFeatured: true,
    link: "/webinars/music-production",
  },
  {
    title: "Songwriting From Idea to Release",
    description:
      "Transform your musical ideas into complete songs by learning melody writing, lyrics, and song structure.",
    slug: "/webinars/songwriting",
    asFeatured: true,
    link: "/webinars/songwriting",
  },
  {
    title: "Violin Performance Techniques",
    description:
      "Enhance bow control, posture, tone quality, and stage confidence through practical demonstrations.",
    slug: "/webinars/violin-performance",
    asFeatured: true,
    link: "/webinars/violin-performance",
  },
  // {
  //   title: "Music Theory Made Simple",
  //   description:
  //     "Understand scales, chords, harmony, rhythm, and ear training through easy-to-follow real-world examples.",
  //   slug: "/webinars/music-theory",
  //   asFeatured: true,
  //   link: "/webinars/music-theory",
  // },
  // {
  //   title: "Live Performance & Stage Confidence",
  //   description:
  //     "Learn how to overcome stage fear, connect with your audience, and deliver memorable live performances.",
  //   slug: "/webinars/live-performance",
  //   asFeatured: true,
  //   link: "/webinars/live-performance",
  // },
];
  return (
    <div className="p-12 bg-gray-900">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center">
        <h1 className=" text-teal-600 font-semibold tracking-wide uppercase text-2xl">Upcoming Webinars</h1>
        <p className=" text-white font-semibold tracking-wide uppercase text-4xl">
          Join Our Live Music Webinars
        </p>
      </div>
      <div className="mt-10">

        <HoverEffect items={webinars.map((webinar) => ({ title: webinar.title, description: webinar.description, link: webinar.link }))} />

      </div>





      <div className="mt-10 text-center">
        <Link href="/webinars" className="inline-block bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition duration-300">
          View All Webinars
        </Link> 
      </div>

     </div>
    </div>
  )
}

export default UpcomingWibenars