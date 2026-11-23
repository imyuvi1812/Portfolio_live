import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services, profile } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient shadow-card rounded-[20px] p-[1px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={`${icon}${icon.includes("?") ? "&" : "?"}tr=f-auto`}
            alt={title}
            loading="lazy"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] sm:text-[17px] max-w-3xl sm:leading-[30px] leading-1"
      >
        Hi, I’m Yuvraj Singh, a Fourth-year Electronics &amp; Telecommunication
        student at Army Institute of Technology, Pune (CGPA 9.12). I build
        retrieval-augmented generation systems and machine learning models for
        regulated domains like compliance and insurance, where every answer needs
        a citation and every model needs a business reason. I also have a
        full-stack background with React.js, Node.js and MongoDB. I was selected
        in the BNP Paribas Hackathon (Top 550 of 65,000+) and was a finalist at
        Mastercard Code for Change 2025.
      </motion.p>
      <a
        href={profile.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-tertiary py-3 px-8 text-white font-bold shadow-md shadow-primary rounded-xl"
      >
        Download Resume
      </a>
      <div className="mt-20 flex  flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
