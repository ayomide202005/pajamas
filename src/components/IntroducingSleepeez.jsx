import { motion } from 'framer-motion'
import { Shield, Heart, Zap } from 'lucide-react'

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
}

function IntroducingSleepeez() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Comfort, Confidence, and Dry Nights—Reimagined.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-center mb-12"
        >
          Meet Sleepeez Pajamas: a patented, innovative solution designed with your childs well-being in mind. Our pajamas feature discreet, easy-to-use absorbent pads tucked neatly away to provide:
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: "Unmatched Comfort", description: "Soft and cozy fabrics ensure restful nights." },
            { icon: Shield, title: "Discreet Protection", description: "No one will know but your child, fostering confidence." },
            { icon: Zap, title: "Ease of Use", description: "Replaceable pads make cleanup a breeze—just remove, seal, toss, and replace!" },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={featureVariants}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon size={48} className="mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntroducingSleepeez