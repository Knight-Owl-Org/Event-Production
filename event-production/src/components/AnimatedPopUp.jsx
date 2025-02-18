import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedPopUp = ({ children, animationProps }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Update state based on visibility
      },
      { threshold: 0.2 } // Trigger animation when 20% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.85 }, // Softer initial state
        visible: { opacity: 1, y: 0, scale: 1 } // Natural, fluid appearance
      }}
      transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }} // Smooth, natural ease
      {...animationProps}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPopUp;
