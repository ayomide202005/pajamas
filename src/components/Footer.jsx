
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const footerSections = [
  {
    title: 'About Sleepeez',
    content: 'Empowering children with comfortable, confidence-building sleepwear solutions.',
  },
  {
    title: 'Quick Links',
    links: [
      { name: 'Shop', path: '/shop' },
      { name: 'About Us', path: '/about' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Customer Service',
    links: [
      { name: 'Shipping', path: '/shipping' },
      { name: 'Returns', path: '/returns' },
      { name: 'FAQ', path: '/faq' },
    ],
  },
]

const socialLinks = [
  { Icon: Facebook, href: '#' },
  { Icon: Instagram, href: '#' },
  { Icon: Twitter, href: '#' },
]

function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              {section.content && <p className="text-purple-200">{section.content}</p>}
              {section.links && (
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="text-purple-200 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: footerSections.length * 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-purple-200 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 pt-8 border-t border-purple-800 text-center"
        >
          <p className="text-purple-200">
            © {new Date().getFullYear()} Sleepeez. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer