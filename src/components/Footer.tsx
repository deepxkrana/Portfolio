// Using React implicitly with JSX
import { motion } from 'framer-motion';
import { Film, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Film className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold">Rajendra Rana</span>
            </div>
            <p className="text-gray-400 mb-4">
              Director with over 18 years of experience in the Film and Television Industry.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-indigo-400 transition">About</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-indigo-400 transition">Experience</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-indigo-400 transition">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-indigo-500" />
                <a href="mailto:rana.rajendra68@gmail.com" className="text-gray-400 hover:text-indigo-400 transition">
                  rana.rajendra68@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-indigo-500" />
                <span className="text-gray-400">09820767377</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-indigo-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Bhayander (E), District- Thane, Pin - 401105
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-gray-500">
            © {new Date().getFullYear()} Rajendra Rana. All rights reserved.<br />
            <span className="text-gray-600">Director</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;