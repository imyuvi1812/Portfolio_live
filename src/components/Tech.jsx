// Tech.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useNavigate } from "react-router-dom";

// Browsers allow only ~16 live WebGL contexts per page. The hero, the star
// field and the Earth already use 3, so keep the number of 3D balls low.
const MAX_BALLS_DESKTOP = 11;
const MAX_BALLS_MOBILE = 5;

// Mounts the WebGL canvas only while the ball is near the viewport and frees
// the context again when it scrolls away.
const LazyBall = ({ icon }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      {visible && <BallCanvas icon={icon} />}
    </div>
  );
};

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const limit = isMobile ? MAX_BALLS_MOBILE : MAX_BALLS_DESKTOP;
  const visibleTechs = technologies.slice(0, limit);
  const hasMore = technologies.length > limit;

  return (
    <>
      <motion.div className="w-full text-center py-10">
        <p className={styles.sectionSubText}>What I Use to Build</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {visibleTechs.map((tech) => (
          <div className="sm:w-36 w-28 h-28 sm:h-36" key={tech.name}>
            <LazyBall icon={tech.icon} />
          </div>
        ))}

        {hasMore && (
          <div
            onClick={() => navigate("/all-technologies")}
            className="sm:w-36 w-28 h-28 sm:h-36 rounded-full border border-dashed border-[#915eff] flex items-center justify-center cursor-pointer hover:bg-[#915eff]/10 text-[#915eff] text-sm font-medium transition"
          >
            + More
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
