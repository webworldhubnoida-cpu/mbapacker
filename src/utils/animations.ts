import { Variants } from 'motion/react';

// Common Easing
export const transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1]
};

// Page Transitions
export const pageTransition: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
};

// Fade & Slide Reveal
export const fadeUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { ...transition }
  },
  viewport: { once: true, margin: "-100px" }
};

export const fadeLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  whileInView: { 
    opacity: 1, 
    x: 0,
    transition: { ...transition }
  },
  viewport: { once: true }
};

export const fadeRight: Variants = {
  initial: { opacity: 0, x: 40 },
  whileInView: { 
    opacity: 1, 
    x: 0,
    transition: { ...transition }
  },
  viewport: { once: true }
};

// Staggered Container
export const staggerContainer: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  viewport: { once: true }
};

// Interaction Effects
export const buttonHover = {
  scale: 1.05,
  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  transition: { duration: 0.3, ease: "easeOut" }
};

export const cardHover = {
  y: -12,
  scale: 1.02,
  transition: { duration: 0.4, ease: "easeOut" }
};

export const iconHover = {
  rotate: [0, -10, 10, -10, 0],
  transition: { duration: 0.5 }
};

// Floating Animation
export const floating: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Image Zoom Hover
export const imageZoom = {
  initial: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.8, ease: "easeOut" } }
};
