// Using React implicitly with JSX
import { ChevronDown, Film, Clapperboard, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/70 to-gray-900"></div>
      
      {/* Backdrop image */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/10809856/pexels-photo-10809856.jpeg')] bg-cover bg-center"
        style={{ backgroundPosition: 'center 30%' }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Film size={16} />
            <span className="text-sm">Film & Television Industry Professional</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Rajendra Rana
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Director & Associate Director
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700/50">
              <Clapperboard size={18} />
              <span>Direction</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700/50">
              <Camera size={18} />
              <span>Creative Vision</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700/50">
              <Film size={18} />
              <span>Acting & Theater</span>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <motion.a 
              href="#about" 
              className="inline-flex items-center text-indigo-300 hover:text-indigo-400 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              <span className="mr-2 group-hover:translate-y-0.5 transition-transform duration-300">Scroll Down</span>
              <motion.div
                animate={{ 
                  y: [0, 6, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 1.5,
                  ease: "easeInOut" 
                }}
              >
                <ChevronDown />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;