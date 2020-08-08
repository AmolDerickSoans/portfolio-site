import React from "react";
import { motion } from "framer-motion";
const svgVariants ={
  hidden: {rotate:-5},
  visible:{
    rotate:0,
    transition:{duration:1}
  }
}
const pathvariants={
  hidden:{
    opacity:0,
    pathLength:0
  },
  visible:{
    opacity:1,
    pathLength:1,
    transition:{
     
      duration:1,
      ease:"anticipate"
    }
  }
}
const Logo = () => (
    <motion.svg
    whileHover={{  }}
    variants={svgVariants}
    initial="hidden"
    animate="visible"
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="56"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 256 256"
  >
    <motion.path
      variants={pathvariants}
      fill="#00A66C"
      d="M166.54 5.121l80.25 241a7.475 7.475 0 01-1.028 6.758 7.48 7.48 0 01-6.086 3.121h-41.551c-16.25 0-30.57-10.336-35.625-25.707l-41.688-124.922a7.421 7.421 0 010-4.746l31.5-95.496zm0 0"
     ></motion.path>
    <motion.path
      variants={pathvariants}
      fill="#4086F4"
      d="M57.875 256h-41.55a7.505 7.505 0 01-6.087-3.113 7.52 7.52 0 01-1.031-6.762l79.95-241A7.514 7.514 0 0196.276 0h63.149a7.505 7.505 0 016.086 3.113 7.51 7.51 0 011.027 6.762L93.492 230.313C88.442 245.672 74.122 256 57.875 256zm0 0"
     ></motion.path>
    <motion.path
      variants={pathvariants}
      fill="#4175DF"
          d="M159.426 0h-31.469v126.781L166.535 9.875a7.497 7.497 0 00-1.023-6.762A7.505 7.505 0 00159.426 0zm0 0"
        ></motion.path>
  </motion.svg>
);

export default Logo;
