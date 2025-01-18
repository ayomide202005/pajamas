import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen overflow-hidden bg-purple-900 text-white"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500 opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
          rotate: [0, 0, -180, -180, 0],
          borderRadius: ["30%", "30%", "50%", "50%", "30%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-pink-500 opacity-30"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Say Goodbye to Bedtime Worries, Hello to Confident Sleep!
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8"
        >
          Empowering Children to Wake Up Happy and Self-Assured.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
  to="/shop"
  className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors text-base md:text-lg w-full md:w-auto text-center block"
>
  Shop Now and Experience the Sleepeez Difference!
</Link>

        </motion.div>
      </div>
    </motion.div>
  )
}

export default HeroSection