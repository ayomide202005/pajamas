import { motion } from 'framer-motion'
import { Moon, Sun, RefreshCw } from 'lucide-react'

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
    },
  }),
}

function HowItWorks() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Effortless Bedtime Routine for Every Family.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Moon, title: "1. Wear Sleepeez Pajamas", description: "Your child gets dressed in their comfy and stylish Sleepeez." },
            { icon: Sun, title: "2. Relax and Sleep Soundly", description: "Absorbent pads provide overnight protection, keeping kids dry and cozy." },
            { icon: RefreshCw, title: "3. Quick Morning Cleanup", description: "Simply remove the pad, seal it, toss it, and replace it with a fresh one for the next night!" },
          ].map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={stepVariants}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <step.icon size={48} className="text-purple-600 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks