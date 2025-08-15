import { motion, useReducedMotion } from 'framer-motion'
import { PropsWithChildren } from 'react'

export default function AnimatedSection({ children, delay=0 }: PropsWithChildren<{ delay?: number }>) {
  const prefersReduced = useReducedMotion()
  const variants = prefersReduced ? {} : {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: .5, delay } }
  }
  return (
    <motion.section
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.section>
  )
}
