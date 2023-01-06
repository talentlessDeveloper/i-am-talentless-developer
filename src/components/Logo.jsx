import { motion } from "framer-motion";

const Logo = ({ variant, width, height, fontSize, fill, anchor }) => {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} 400`}
      layout
    >
      <motion.text
        x='50%'
        y='65%'
        fill={fill}
        textAnchor={anchor}
        className={`font-serif ${fontSize} stroke-zinc-50 stroke-[4]`}
        variants={variant}
      >
        t̶D̶
      </motion.text>
    </motion.svg>
  );
};

export default Logo;
