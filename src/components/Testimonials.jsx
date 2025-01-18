import { motion } from 'framer-motion'

const testimonials = [
  {
    text: "Sleepeez has been a game-changer for our family. My son wakes up happier and more confident!",
    author: "Sarah M."
  },
  {
    text: "These pajamas make nighttime stress-free. The discreet design is genius!",
    author: "Emily K."
  }
]

const testimonialVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
    },
  }),
}

function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          What Parents Are Saying About Sleepeez.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={testimonialVariants}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg mb-4 italic"
              >
                {testimonial.text}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="font-semibold text-purple-600"
              >
                - {testimonial.author}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials