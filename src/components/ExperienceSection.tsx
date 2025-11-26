// Using React implicitly with JSX
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';

// Helper function to extract and parse the start date from period string
const getStartDate = (period: string): Date => {
  // Extract the first date mention from the period string
  const dateString = period.toLowerCase();
  let year = 0;
  let month = 0;

  // Extract year
  const yearMatch = dateString.match(/\b(20\d{2}|19\d{2})\b/);
  if (yearMatch) {
    year = parseInt(yearMatch[0]);
  }

  // Extract month if present
  const months = {
    'january': 0, 'february': 1, 'march': 2, 'april': 3, 'may': 4, 'june': 5,
    'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11
  };

  for (const [monthName, monthValue] of Object.entries(months)) {
    if (dateString.includes(monthName)) {
      month = monthValue;
      break;
    }
  }

  // Handle "early" qualifier
  if (dateString.includes('early') && !dateString.match(/\b(january|february|march|april)\b/i)) {
    month = 1; // Assume early in year means around January
  }

  // Create date object (default to January if no month specified)
  return new Date(year, month, 1);
};

// Original experiences array
const unsortedExperiences = [
  {
    period: "From 2022 to 2023",
    role: "Associate Director",
    production: "Serial- \"Choti Sardaarni\" for Colors TV",
    company: "Cockrow & Shaika Entertainment",
    director: "Director - Jaladh Sharma"
  },
  {
    period: "From January 2023 to June 2024",
    role: "Associate & Second Unit Director",
    production: "Serial- \"Teri Meri Doriyaan\" for Star Plus",
    company: "Cockrow & Shaika Entertainment",
    director: "Director - Prabhat Rawat"
  },
  {
    period: "From November 2024 to January 2025",
    role: "Associate & Second Unit Director",
    production: "Serial- \"Deewaniyat\" for Star Plus",
    company: "Cockrow & Shaika Entertainment",
    director: "Director - Prabhat Rawat"
  },
  {
    period: "From April 2025 to May 2025",
    role: "Associate Director",
    production: "Serial- \"Veer Hanuman\" for Sony TV",
    company: "Swastik Entertainment",
    director: "Director - Kamal Monga"
  },
  {
    period: "From 2020 to 2022",
    role: "Associate Director",
    production: "Serial- \"Ye Rishta kya kahlata hai\" for Star Plus",
    company: "Director's Kut production",
    director: "Director - Rishi Mandiyal"
  },
  {
    period: "From Early 2019 to Late 2019",
    role: "Associate Director",
    production: "Serial- \"Baavle Utaavle\" for Sony SAB",
    company: "Director's Kut production",
    director: "Director - Rishi Mandiyal"
  },
  {
    period: "From June 2014 to 2018",
    role: "Associate Director",
    production: "Serial- \"Kumkum Bhagya\" on Zee TV & \"Meri Aashiqui Tum Se He\" on Colors TV",
    company: "Balaji Telefilms",
    director: "Director - Sharad Pandey"
  },
  {
    period: "December 2012 to April 2014",
    role: "Associate Director",
    production: "Serial- \"Buddy Project S1 & S2\" on MTV VOOT",
    company: "Sunshine Production",
    director: "Director - Vikram Labhe"
  },
  {
    period: "March 2012 to September 2012",
    role: "Associate Director",
    production: "Serial- \"Kuchh To Log Kahenge\" on SONY TV",
    company: "Director's Kut Production",
    director: "Director - Sharad Pandey"
  },
  {
    period: "December 2011 to March 2012",
    role: "Chief Assistant Director",
    production: "Serial- HAVAN on COLORS TV",
    company: "Directors Kut Production",
    director: "Director - Shyam Maheshwari & Sharad Pandey"
  },
  {
    period: "October 2009 to July 2011",
    role: "Assistant Director",
    production: "Serial- Kesariya baalam Aawo Hamare Des on SAHARA ONE",
    company: "Ananda Films",
    director: "Director - Jaladh Sharma"
  },
  {
    period: "December 2006 to September 2009",
    role: "Assistant Director",
    production: "Serial- Ghar Ek Sapna on SAHARA ONE",
    company: "Ananda Films",
    director: "Director - Ajay Sinha"
  },
  {
    period: "June 2025 till Now",
    role: "Associate & Second Unit Director",
    production: "Serial- Kahani Pehle Pyaar Ki on Dangal TV",
    company: "Cinemakers Production",
    director: "Director - Prabhat Rawat"
  }
];

// Sort experiences in descending order by start date (most recent first)
const experiences = [...unsortedExperiences].sort((a, b) => {
  const dateA = getStartDate(a.period);
  const dateB = getStartDate(b.period);
  return dateB.getTime() - dateA.getTime();
});

// Filter experiences by role
const secondUnitDirectorExperiences = experiences.filter(
  exp => exp.role === "Associate & Second Unit Director"
);

const otherExperiences = experiences.filter(
  exp => exp.role !== "Associate & Second Unit Director"
);

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-indigo-600 text-white p-5 md:w-1/3 flex flex-col justify-center items-center text-center">
        <Calendar size={24} className="mb-2" />
        <p className="font-medium">{experience.period}</p>
      </div>
      
      <div className="p-5 md:w-2/3">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{experience.role}</h3>
        <p className="text-indigo-600 mb-3">{experience.production}</p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Production:</span> {experience.company}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Direction:</span> {experience.director}
        </p>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over 18 years of experience in the Film and Television Industry, working with renowned production houses and directors on popular TV serials.
          </p>
        </motion.div>
        
        {/* Associate & Second Unit Director Section */}
        {secondUnitDirectorExperiences.length > 0 && (
          <div className="mb-16">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Associate & Second Unit Director</h3>
              <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {secondUnitDirectorExperiences.map((experience, index) => (
                <ExperienceCard key={`second-unit-${index}`} experience={experience} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Other Experiences Section */}
        {otherExperiences.length > 0 && (
          <div>
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Other Roles</h3>
              <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {otherExperiences.map((experience, index) => (
                <ExperienceCard key={`other-${index}`} experience={experience} index={index} />
              ))}
            </div>
          </div>
        )}
        
        <motion.div 
          className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Award size={24} className="text-indigo-600" />
            <h3 className="text-2xl font-bold text-gray-800">Career Goals</h3>
          </div>
          
          <p className="text-gray-600 mb-6">
            To show my efficiency in the production house and to challenge my position in the film industry, 
            to develop a long term within moral and dynamic organization, at a responsible position, 
            provides an excellent work atmosphere with high performance incentive and opportunities.
          </p>
          
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-3">Positive Qualities</h4>
            <ul className="text-gray-600 space-y-2 list-disc pl-5">
              <li>Ready to work for hours in crisis situations</li>
              <li>Ability to take initiatives in all types of shoots</li>
              <li>Implement plans honestly as asked by Seniors & Colleagues</li>
              <li>Always eager to learn good things to improve work accuracy</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;