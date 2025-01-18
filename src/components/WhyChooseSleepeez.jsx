import { motion } from 'framer-motion'
import { Star, Smile, Heart } from 'lucide-react'

const reasonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
}

function WhyChooseSleepeez() {
  return (
    <section className="py-16 bg-purple-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-purple-800"
        >
          The Sleepeez Difference Makes Growing Up Easier.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Star, title: "Empowers Confidence", description: "Helps children feel validated and secure." },
            { icon: Smile, title: "Simplifies Life for Parents", description: "No more complex routines—just practical, effective solutions." },
            { icon: Heart, title: "Designed for Kids, Approved by Parents", description: "Thoughtful engineering for real-life challenges." },
          ].map((reason, i) => (
            <motion.div
              key={reason.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={reasonVariants}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="text-purple-600 mb-4"
              >
                <reason.icon size={48} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-purple-800">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSleepeez