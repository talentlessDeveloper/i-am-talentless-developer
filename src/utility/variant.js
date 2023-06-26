export const containerVariant = {
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.25,
    },
  },
};

export const logoVariant = {
  animate: {
    strokeDasharray: ['0%, 50%', '50%, 0%'],
    strokeDashoffset: ['20%', '-20%'],
    transition: {
      //   ease: "easeInOut",
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 3,
    },
  },
};

export const onLoadVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
  },
};

export const itemVariant = {
  hidden: {
    y: -100,
  },
  show: {
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.25,
    },
  },
};

export const heroVariant = {
  hidden: {
    y: 300,
  },
  show: {
    y: 0,
    transition: {
      // ease: [0.6, 0.01, -0.05, 0.95],
      ease: 'easeInOut',
      duration: 0.25,
    },
  },
};

export const projectVariant = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
    transition: {
      // ease: [0.6, 0.01, -0.05, 0.95],
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};
