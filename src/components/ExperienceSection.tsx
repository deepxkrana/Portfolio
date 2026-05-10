// Using React implicitly with JSX
import { motion } from 'framer-motion';
import { Calendar, Award, ExternalLink } from 'lucide-react';

export interface Experience {
  period: string;
  role: string;
  production: string;
  company: string;
  director: string;
  link?: string;
  thumbnail?: string;
}

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
const unsortedExperiences: Experience[] = [
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
  },
  {
    period: "2025",
    role: "Director",
    production: "Story- Slave to my CEO wife",
    company: "Vertical TV",
    director: "Director - Rajendra Rana",
    link: "https://www.instagram.com/reel/DMam4UMSiNE/?igsh=MTB6NWV2Yml1bmJnNg==",
    thumbnail: "STMCW.jpg"
  },
  {
    period: "2025",
    role: "Director",
    production: "Story- Do Chehre",
    company: "Flick TV",
    director: "Director - Rajendra Rana",
    link: "https://www.instagram.com/reel/DQ3gMb7CXRM/?igsh=Y3F4MzFjaXVzZDF0",
    thumbnail: "DC.jpg"
  },
  {
    period: "2025",
    role: "Director",
    production: "Story- Jab Tum Saath Ho",
    company: "Flick TV",
    director: "Director - Rajendra Rana",
    link: "https://www.instagram.com/reel/DQTzT7Iidfo/?igsh=eXl0OXgwbmYwanF5",
    thumbnail: "JTSH.jpg"
  },
  {
    period: "2025",
    role: "Director",
    production: "Story- My Missing Wife",
    company: "Story TV",
    director: "Director - Rajendra Rana",
    link: "https://www.instagram.com/reel/DMrajGspu3G/?igsh=emxwbm5rajJ4emdl",
    thumbnail: "MMW.jpg"
  },
  {
    period: "2025",
    role: "Director",
    production: "Story- Dil To Rascal Hai Ji",
    company: "Story TV",
    director: "Director - Rajendra Rana",
    link: "https://www.instagram.com/reel/DMXzxAzpM3V/?igsh=MTV5ZjcwbGJoOHh3OA==",
    thumbnail: "DTRHJ.jpg"
  },
  {
    period: "2025",
    role: "Director",
    production: "Story- Honeymooning With My Ex",
    company: "Vertical TV",
    director: "Director - Rajendra Rana",
    link: "https://www.instagram.com/reel/DKcN_rxS3MR/?igsh=MTV5d282eW9zNHV0",
    thumbnail: "HWME.jpg"
  },
  {
    period: "2025",
    role: "Second UnitDirector",
    production: "Story- Toxic Lover",
    company: "Vertical TV",
    director: "Director - Rajendra Rana",
    link: "https://www.instagram.com/reel/DNqcUsSy-t3/?igsh=MXV0Nnh2czJ4azN4YQ==",
    thumbnail: "TL.jpg"
  },
  {
    period: "2026",
    role: "Director",
    production: "Story- Cell No. 16",
    company: "Pratilipi",
    director: "Director - Rajendra Rana",
    link: "https://www.instagram.com/reel/DW6uy2rDeiu/?igsh=MXFzZzR1dHF3a3Fyaw==",
    thumbnail: "CN16.jpg"
  },
  {
    period: "2026",
    role: "Director",
    production: "Story- Bepanaah Rishta",
    company: "Pratilipi",
    director: "Director - Rajendra Rana",
    link: "https://www.instagram.com/reel/DXHm23SFGOn/?igsh=MWxmaXdoOGYzb2w3Yw==",
    thumbnail: "BR.jpg"
  },
  {
    period: "2025",
    role: "Director",
    production: "Story- Share Bazaar Ka Badshah",
    company: "Viralo TV",
    director: "Director - Rajendra Rana",
    link: "https://www.instagram.com/reel/DPqjKQyiigL/?igsh=MTNrcXVpemd2am5hZA==",
    thumbnail: "SBKB.jpg"
  },
];

// Sort experiences in descending order by start date (most recent first)
const experiences = [...unsortedExperiences].sort((a, b) => {
  const dateA = getStartDate(a.period);
  const dateB = getStartDate(b.period);
  return dateB.getTime() - dateA.getTime();
});

// Filter experiences by role
const VerticalDirectorExperiences = experiences.filter(
  exp => exp.role === "Director"
);

const secondUnitDirectorExperiences = experiences.filter(
  exp => exp.role === "Associate & Second Unit Director"
);

const otherExperiences = experiences.filter(
  exp => exp.role !== "Associate & Second Unit Director" && exp.role !== "Director"
);

const ExperienceCard = ({ experience, index, hideDirector = false }: { experience: Experience, index: number, hideDirector?: boolean }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-indigo-600 text-white p-5 md:w-1/4 shrink-0 flex flex-col justify-center items-center text-center">
        <Calendar size={24} className="mb-2" />
        <p className="font-medium">{experience.period}</p>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{experience.role}</h3>
        <p className="text-indigo-600 mb-3">{experience.production}</p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Production:</span> {experience.company}
        </p>
        {!hideDirector && (
          <p className="text-gray-600">
            <span className="font-medium">Direction:</span> {experience.director}
          </p>
        )}
      </div>

      {(experience.link || experience.thumbnail) && (
        <div className="bg-gray-50 w-full md:w-32 lg:w-40 shrink-0 flex flex-col border-t md:border-t-0 md:border-l border-gray-100 relative aspect-[2/3] md:aspect-auto md:min-h-[192px] lg:min-h-[240px]">
          {experience.thumbnail ? (
            <div className="relative w-full h-full overflow-hidden group">
              <img src={experience.thumbnail} alt={experience.production} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

              {experience.link && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>
              )}
              {experience.link && (
                <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col justify-end">
                  <a href={experience.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-2 bg-indigo-600/90 hover:bg-indigo-600 text-white rounded-md text-xs font-medium w-full transition-colors shadow-sm backdrop-blur-sm">
                    View Project <ExternalLink size={14} className="ml-1.5" />
                  </a>
                </div>
              )}
            </div>
          ) : (
            <div className="p-5 flex h-full items-center justify-center w-full">
              {experience.link && (
                <a href={experience.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-md transition-colors text-sm font-medium w-full justify-center text-center">
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              )}
            </div>
          )}
        </div>
      )}
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

        {/* Director Section */}
        {VerticalDirectorExperiences.length > 0 && (
          <div className="mb-16">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Director & Second Unit Director - Micro Drama</h3>
              <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {VerticalDirectorExperiences.map((experience, index) => (
                <ExperienceCard key={`director-${index}`} experience={experience} index={index} hideDirector={true} />
              ))}
            </div>
          </div>
        )}

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