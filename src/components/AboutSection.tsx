// Using React implicitly with JSX
import { Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-10 rounded-full"></div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-indigo-600 text-white p-6">
                <div className="h-32 w-32 rounded-full bg-white/20 mx-auto mb-6 overflow-hidden">
                  <img 
                    src="profilephoto2.jpg" 
                    alt="Profile Photo of Rajendra Rana" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-6 text-center">Rajendra Rana</h3>
                
                <div className="space-y-5 mt-6">
                  {/* INFO ITEMS - Using table-like structure for perfect alignment */}
                  <div className="grid grid-cols-[28px_1fr] gap-x-3 items-center">
                    <div className="flex justify-center">
                      <Briefcase size={20} className="text-indigo-200" />
                    </div>
                    <div>
                      <span className="font-medium">Director & Associate Director</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-[28px_1fr] gap-x-3 items-center">
                    <div className="flex justify-center">
                      <Calendar size={20} className="text-indigo-200" />
                    </div>
                    <div>
                      <span className="font-medium">18+ Years of Industry Experience</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-[28px_1fr] gap-x-3 items-center">
                    <div className="flex justify-center">
                      <Mail size={20} className="text-indigo-200" />
                    </div>
                    <div>
                      <a href="mailto:rana.rajendra68@gmail.com" className="font-medium hover:text-indigo-200 transition duration-300">
                        rana.rajendra68@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-[28px_1fr] gap-x-3 items-center">
                    <div className="flex justify-center">
                      <Phone size={20} className="text-indigo-200" />
                    </div>
                    <div>
                      <span className="font-medium">09820767377</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-[28px_1fr] gap-x-3 items-start">
                    <div className="flex justify-center pt-1">
                      <MapPin size={20} className="text-indigo-200" />
                    </div>
                    <div>
                      <span className="font-medium">
                        Bhayander (E),<br/>
                        District- Thane,<br/>
                        Pin - 401105
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-[28px_1fr] gap-x-3 items-center">
                    <div className="flex justify-center">
                      <GraduationCap size={20} className="text-indigo-200" />
                    </div>
                    <div>
                      <span className="font-medium">B.Sc. in Botany (2006)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Professional Summary</h3>
                
                <p className="text-gray-600 mb-4">
                  I am a seasoned Director and Associate Director with extensive experience in the Film and Television Industry since 2006. Over the years, I have worked with some of the most reputed production houses and directors, contributing to a wide range of successful television serials aired on leading channels such as Colors TV, Sony TV, Star Plus, and Zee TV.
                </p>
                
                <p className="text-gray-600 mb-4">
                  My core strengths include visual storytelling, scene planning, second unit direction, and efficient management of cast and crew across diverse shooting environments. I bring a deep understanding of cinematic techniques, with hands-on expertise in handling HD, P2-HD, Movie Cameras, and 5D systems. I excel at maintaining continuity, optimizing shooting schedules, and executing the creative vision from script to screen — both on set and in the studio.
                </p>
                
                <h3 className="text-xl font-bold mb-4 text-gray-800 mt-8">Job Profile</h3>
                
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Directing scenes for TV broadcasts and commercials</li>
                  <li>Evaluating locations and sets to determine filming and lighting requirements</li>
                  <li>Composing shots with technical precision using light, filters, and camera settings</li>
                  <li>Leading technical teams: sound, lighting, and camera crew</li>
                  <li>Ensuring continuity on location and in the studio</li>
                  <li>Managing Second Units and Split Units</li>
                  <li>Driving creative vision from script to screen</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;