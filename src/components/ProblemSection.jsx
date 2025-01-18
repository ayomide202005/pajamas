import { motion } from 'framer-motion'

function ProblemSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-100 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Growing Up Shouldnt Be a Source of Stress.
        </motion.h2>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-700 text-center"
        >
          For generations, bedwetting has caused confusion and embarrassment for children. Its already hard enough navigating childhood milestones—why add unnecessary shame to the mix? Sleepeez is here to change the narrative, offering support and validation during this crucial stage of life.
        </motion.p>
      </div>
    </motion.section>
  )
}

export default ProblemSection