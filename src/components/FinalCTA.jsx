import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function FinalCTA() {
  return (
    <section className="py-16 bg-purple-900 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">Support Your Childs Journey to Confidence.</h2>
          <p className="text-xl">
            Its more than pajamas—its a stepping stone to a brighter tomorrow. Shop now and give your child the gift of comfort, confidence, and peace of mind.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            to="/shop"
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg inline-block hover:bg-purple-100 transition-colors"
          >
            Shop Sleepeez Pajamas Today!
          </Link>
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
          className="absolute -top-16 -left-16 w-32 h-32 bg-pink-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -360, 0],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500 rounded-full opacity-20"
        />
      </div>
    </section>
  )
}

export default FinalCTA