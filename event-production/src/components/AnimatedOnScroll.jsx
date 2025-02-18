import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedOnScroll = ({ children, animationProps }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Update state based on visibility
      },
      {
        threshold: 0.2 // Trigger animation when 20% of the component is visible
      }
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
        hidden: { opacity: 0, y: 50 }, // Off-screen below
        visible: { opacity: 1, y: 0 } // In-view animation
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      {...animationProps} // Allow customization through props
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
