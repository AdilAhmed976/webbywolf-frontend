import {
  bottomCardVariants,
  leftCardVariants,
  rightCardVariants,
  topCardVariants,
} from "@/common/animation-variants";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const getVariant = (position) => {
  switch (position) {
    case "left":
      return leftCardVariants;
    case "right":
      return rightCardVariants;
    case "top":
      return topCardVariants;
    case "bottom":
      return bottomCardVariants;
    default:
      return rightCardVariants; // fallback
  }
};

const AnimatedCard = ({
  position = "right",
  index = 0,
  className,
  children,
  delayStep = 0.2,
  once = false,
  ...rest
}) => {
  const selectedPosition = getVariant(position);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once, amount: 0.3 }}
      variants={selectedPosition}
      transition={{
        delay: index * delayStep,
      }}
      className={cn("", className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
