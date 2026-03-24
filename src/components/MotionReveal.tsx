import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type MotionRevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  className?: string;
  width?: 'auto' | '100%';
};

export default function MotionReveal({ 
  children, 
  delay = 0, 
  y = 30, 
  x = 0,
  duration = 0.6,
  className = '',
  width = 'auto'
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0], // smooth ease-out curve
      }}
      className={className}
      style={{ width: width === '100%' ? '100%' : undefined }}
    >
      {children}
    </motion.div>
  );
}
