"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Flix",
    description: "Flix, a movie experience website, where all the latest movies from netflix are available to choose from.",
    image: "/images/project_1.png",
    tag: ["All Projects", "Web Projects"],
    gitUrl: "https://github.com/kazekunal/flix",
    previewUrl: "https://flix-2gslfzebm-kazekunal.vercel.app/",
  },
  {
    id: 2,
    title: "PharmLink+",
    description: "The future of secure healthcare, our blockchain-powered system is revolutionizing medical prescription management, eliminating fraud and ensuring patient safety with unparalleled transparency and accountability.",
    image: "/images/project_2.png",
    tag: ["All Projects", "Web Projects"],
    gitUrl: "https://github.com/kazekunal/hackathon",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "BuzzJob",
    description: "BuzzJobs is a job portal built using Next.js and SQL, designed to streamline the job search process for both job seekers and employers.",
    image: "/images/project_3.png",
    tag: ["All Projects", "Web Projects"],
    gitUrl: "https://github.com/kazekunal/buzz_job",
    previewUrl: "https://buzzjob.vercel.app/",
  },
  {
    id: 4,
    title: "Breeze'24 - Circa'72, University Fest",
    description: "A full stack application where attendees could effortlessly register and make payments for various events for my University's Festival. Focusing on the intricate development of distinct user roles, the e-commerce functionality, and the robust backend architecture.",
    image: "/images/project_4.png",
    tag: ["All Projects", "Web Projects"],
    gitUrl: "https://github.com/thearyanthegr8/Breeze2024",
    previewUrl: "https://www.instagram.com/p/C2acIihvtY6/",
  },
  {
    id: 5,
    title: "sentiment_Analysis",
    description: "We've conducted a sentiment analysis on the dataset, which classifies each tweet into categories such as positive, negative, or neutral sentiment. The analysis provides valuable insights into the public's emotional responses and opinions regarding the G20 Summit.",
    image: "/images/project_5.png",
    tag: ["All Projects", "ML Projects"],
    gitUrl: "https://github.com/kazekunal/sentiment_Analysis",
    previewUrl: "https://drive.google.com/uc?id=1sD1OjdYvKoPuZMyPe_bBi0CqBb42OrkR&export=download",
  },
  {
    id: 6,
    title: "Finvest, finance-tech club",
    description: "Welcome to the exciting world of Finvest, where finance becomes an exhilarating adventure rather than a daunting mystery! We're not your average finance club– at Finvest, we're on a mission to unleash the power of financial literacy and make it accessible to everyone.",
    image: "/images/project_6.png",
    tag: ["All Projects", "Web Projects"],
    gitUrl: "https://github.com/kazekunal/finvest-website",
    previewUrl: "https://finvestsnu.vercel.app/",
  },
  {
    id: 7,
    title: "Sales Forecast",
    description: "This project utilizes Linear Regression, a fundamental machine learning algorithm, to predict the number of items sold in various stores. We use a comprehensive training dataset that includes 900,000 data points, each detailing the date, item, store, and the quantity of items sold. The goal is to provide accurate sales forecasts that can help in inventory management and marketing strategies.",
    image: "/images/project_7.png",
    tag: ["All Projects", "ML Projects"],
    gitUrl: "https://github.com/kazekunal/Sales_forecast",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Handsign-Recognition",
    description: "This project implements a real-time hand gesture recognition system using a webcam. The system segments the hand region from the background and displays the thresholded hand image and the contours of the hand.",
    image: "/images/project_8.jpg",
    tag: ["All Projects", "ML Projects"],
    gitUrl: "https://github.com/kazekunal/Handsign-Recognition",
    previewUrl: "https://drive.google.com/file/d/1OpNc-y5iGxpcQm_SUkthlCeZW4t91YMD/view?usp=drivesdk",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-1 py-6">
        <ProjectTag 
          onClick={handleTagChange}
          name="All Projects"
          isSelected={tag === "All Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web Projects"
          isSelected={tag === "Web Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML Projects"
          isSelected={tag === "ML Projects"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;