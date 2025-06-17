import { listItemVariants } from "@/common/animation-variants";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const AnimatedListItem = ({
  index = 0,
  className,
  children,
  transitionDuration = 0.2,
  delayStep = 0.2,
  once = false,
  ...rest
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once, amount: 0.4 }}
      variants={listItemVariants}
      transition={{ duration: transitionDuration, delay: index * delayStep }}
      className={cn("flex", className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedListItem;
