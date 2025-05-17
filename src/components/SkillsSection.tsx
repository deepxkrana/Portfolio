import { motion } from 'framer-motion';
import { MonitorPlay, Lightbulb, Languages, Tv, Clapperboard, Film, Brain, Theater } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
};

const skills: Skill[] = [
  {
    name: "Creative Vision",
    level: 95,
    icon: <Brain size={24} />,
    color: "bg-blue-500"
  },
  {
    name: "Direction",
    level: 95,
    icon: <Clapperboard size={24} />,
    color: "bg-indigo-600"
  },
  {
    name: "Acting & Theater",
    level: 95,
    icon: <Theater size={24} />,
    color: "bg-purple-600"
  },
  {
    name: "Scene Composition",
    level: 95,
    icon: <Film size={24} />,
    color: "bg-red-500"
  },
  {
    name: "Crew Management",
    level: 90,
    icon: <Tv size={24} />,
    color: "bg-green-500"
  },
  {
    name: "Computing Skills",
    level: 75,
    icon: <MonitorPlay size={24} />,
    color: "bg-yellow-500"
  },
  {
    name: "Problem Solving",
    level: 85,
    icon: <Lightbulb size={24} />,
    color: "bg-orange-500"
  },
  {
    name: "Languages",
    level: 80,
    icon: <Languages size={24} />,
    color: "bg-teal-500"
  }
];

const SkillBar = ({ skill, index }: { skill: Skill, index: number }) => {
  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className={`p-2 rounded-md text-white mr-3 ${skill.color}`}>
            {skill.icon}
          </div>
          <span className="font-medium text-gray-700">{skill.name}</span>
        </div>
        <span className="text-gray-500">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div 
          className={`h-2.5 rounded-full ${skill.color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Skills</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My diverse skill set has been developed through years of hands-on experience in various aspects of film and television production.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Expertise</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Camera Knowledge</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>HD Camera Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>P2-HD Camera Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>Movie Camera</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>5D Camera</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Computing Skills</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>Operating Systems: MS-DOS, MS-Win 2000/XP/7/10</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>Application Packages: MS-Office 2000/2003/2007</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Languages</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>English (Fluent)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>Hindi (Native)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>Marathi (Proficient)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Hobbies & Interests</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>Acting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>Voice Dubbing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>Music</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>Swimming</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>Good Plays</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;