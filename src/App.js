import React, { useState, useEffect } from 'react';

// --- Main App Component (Static) ---
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hardcoded Portfolio Data
  // ALL CONTENT IS DEFINED HERE. To change anything, you must edit this code.
  const portfolioData = {
    summary: `Ranjan Ottemada Appanna is an Experienced Professional with a demonstrated history of working in the Simulation Domain. He is skilled in Process Optimisation, Process Simulation, and Digital Twins. With over 16 years of expertise in process simulation, digital twins, and engineering optimization, Ranjan is passionate about leveraging data-driven engineering to optimize industrial operations. His experience spans leading the delivery of advanced process simulation solutions for the minerals , pulp and paper and PowerPlant industry, implementing AI-driven optimization solutions for mining processes, and developing high-fidelity dynamic process models for complex industrial operations.`,
    experience: [
      {
        id: 'job1',
        title: 'Lead Engineer',
        company: 'Innomotics (Formerly - Siemens Large Drives)',
        duration: 'Jan 2023 - Present',
        description: [
          'Leading the delivery of advanced process simulation solutions for the minerals industry, we develop comprehensive simulations for complete mineral processing systems. Our solutions drive critical applications including DCS validation, operator training, P&ID validation, HAZOP studies, digital twins, and process optimization.'
        ]
      },
      {
        id: 'job2',
        title: 'Senior Solution Engineer / Field Engineering Lead',
        company: 'IntelliSense.io, Chile',
        duration: 'May 2021 - Jan 2023',
        description: [
          'Identify and quantify high-impact business opportunities, scope them, align them to the appropriate technology driven solution and convince the customer of the configured solution supported by a compelling business value case to match our vision of Making Mining Operations Efficient, Sustainable and Safe through trusted and open Artificial Intelligence (Al) solutions.',
          'Lead implementation of Optimization solutions for Mining processes like Flotation, Thickener etc.'
        ]
      },
      {
        id: 'job3',
        title: 'Project Lead - Simulation',
        company: 'ANDRITZ, Chile',
        duration: 'Aug 2018 - May 2021 (2 years 10 months)',
        description: [
          'Leading multiple Simulation Projects on Various Mining Processes (Crushing, Grinding, Flotation, Thickeners, Pipelines) for Local and International Customers.',
          '**Notable Projects in Mining:**',
          'Technical Lead - Project TECK QB2(Chile): Leading development of Operator Training simulator, development of high fidelity dynamic process models, for the areas Primary Crushing and Ore transport, Grinding and Pebbles, Collective Flotation, Selective Flotation.',
          'Technical Lead - Project Codelco Andina (Chile): Responsible for development of Operator Training simulator, development of high fidelity dynamic process models for the Pipeline systems, Open Channel (87 km) and closed pipeline(30km).',
          'Technical Lead -BHP EWSE (Chile): Responsible for development of high fidelity dynamic process models for the SWRO system and Pipeline system.',
          'Technical Lead - Minera Los Pelambres (Chile): Responsible for upgrading of existing dynamic process models to the existing plant conditions for the areas Primary Crushing and Ore transport, Grinding and Pebbles, Collective Floatation, Selective Floatation.',
          'Technical Consultant: Digital Twin, MLP for Grinding and Flotation.',
          'Technical Consultant: Digital Twin, BHP for Crushing and Ore Transport Conveyors.'
        ]
      },
      {
        id: 'job4',
        title: 'Leading Team of Engineers',
        company: 'ANDRITZ, India',
        duration: 'Nov 2012 - July 2018',
        description: [
          'Led team of engineers for successful delivery of Simulation Projects on Various Industry Processes of Mining, Pulp and Paper and Power Industries.',
          '**Projects Mining:** Sierra Gorda (Chile), Collahuasi (Chile).',
          '**Projects Pulp and Paper:** Klabin Puma (Brazil), IP Bogalusa (USA), SCGP (Thailand), Chenming (China).',
          '**Projects Power:** Fortum (Sweden), Avanta (India), KTPS (India).'
        ]
      },
      {
        id: 'job5',
        title: 'Senior Engineer',
        company: 'L3Harris Technologies',
        duration: 'Sep 2008 - Oct 2012 (4 years 2 months)',
        description: [
          'Simulation of Nuclear Power Plant systems (BOP, auxiliaries, ancillaries), Marine Systems.',
          '**Power Projects:** Callaway Legacy replacement (USA), Embalse (Argentina), Koeberg (South Africa).',
          '**Marine Projects:** P-28 (Indian Navy), LSTII (South Korean Navy).'
        ]
      }
    ],
    skills: 'Process Control, Digital Twins, Solution Engineering, Process Optimization, Minerals Simulations, Python, Engineering Management, Process Engineering, AI Solutions, Operator Training Simulators, Dynamic Process Models, Database Management, Visualization Tools, Cross-functional Collaboration, Spanish, English',
    education: {
      degree: 'Bachelor of Engineering (BE), Mechanical Engineering',
      university: 'Bangalore University',
      duration: '2004-2008'
    },
    honors: [
      {
        id: 'award1',
        award: 'CEO award - IntelliSense.io',
        date: 'Apr 2022',
        description: 'Outstanding effort and Commitment in Pre Sales- support and Implementation of Optimization solutions.'
      }
    ],
    profilePhotoUrl: 'https://drive.google.com/thumbnail?id=13ka2cPqQFs3QzlLIY0BqgCKZwrsB3Pnw&sz=w800', // Still used for web display
    projects: [
      {
        id: 'proj1',
        title: 'Digital Twin - 3D Stockpile Visualisation and Material Tracking', // Updated title
        description: 'This 3D material tracking and blending model empowers plant operators to control mill feed quality. It visually maps the stockpile\'s composition by ore hardness. Simulate different reclaim feeder rates to test blending scenarios and predict the resulting hardness sent to the mill. This tool transforms the stockpile into a predictable resource, enabling proactive, data-driven decisions to ensure stable and efficient mill operation.', // Updated description
        thumbnail: 'https://drive.google.com/thumbnail?id=1k8yi9HfNdzI6JR75DO60QxUUaYrJmFMq&sz=w600', // Corrected thumbnail for this project
        liveLink: 'https://project-stockpile.vercel.app/', // Updated live link
        githubLink: null, // GitHub link removed
        techStack: 'Python, Simulation Software, Data Analytics, Digital Twins'
      },
      {
        id: 'proj2',
        title: 'Prototype Project', // Renamed from 'Process Simulation Platform'
        description: 'Revolutionizing Industrial Process Simulation – A Powerful Web-Based Platform 🚀 Bringing Advanced Simulation to Everyone.', // Description remains the same
        thumbnail: 'https://drive.google.com/thumbnail?id=1hZKBStYP4MBcdPRtDl8FPQr37eanyM_Z&sz=w600', // Thumbnail remains the same
        liveLink: 'https://testranjansim.vercel.app/', // Live link remains the same
        githubLink: null, // GitHub link remains removed
        techStack: 'AI/ML, Process Optimization, Python'
      },
      {
        id: 'proj3',
        title: 'P&ID Analyzer',
        description: 'This AI-powered desktop P&ID Analyzer lets you upload P&ID images or PDFs. Using Google\'s Gemini AI, it automatically extracts equipment, connections, and key simulation parameters, organizing them into clear tables for review. Requires a user-provided Google AI API key to run.',
        thumbnail: 'https://drive.google.com/thumbnail?id=1tmvkCTk7y54VjmVEt3V2kpHgLVMWX6Et&sz=w600',
        liveLink: 'https://analyser-alpha.vercel.app/',
        githubLink: null,
        techStack: 'AI, Document Analysis, Simulation Parameters'
      }
      // Project with id 'proj4' (Pipeline System Modeling) is now removed
    ],
    contactEmail: 'ranjanoa@gmail.com',
    linkedinUrl: 'https://linkedin.com/in/ranjanoa',
    githubUrl: 'https://github.com/yourusername', // Keeping overall GitHub URL for contact section
    contactPhone: '01626854900' // Added phone number
  };


  // Function to scroll to a section smoothly
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  // Effect to handle initial scroll if a hash is present in the URL
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 antialiased min-h-screen">
      {/* CDN scripts for Tailwind and Font Awesome are retained */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>

      {/* Header/Navigation */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo/Name */}
          <a href="#home" onClick={() => scrollToSection('home')} className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition duration-300 rounded-md p-2">
            Ranjan Ottemada Appanna {/* Changed to full name */}
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink id="home" label="Home" activeSection={activeSection} onClick={scrollToSection} />
            <NavLink id="about" label="About" activeSection={activeSection} onClick={scrollToSection} />
            <NavLink id="experience" label="Experience" activeSection={activeSection} onClick={scrollToSection} />
            <NavLink id="skills" label="Skills" activeSection={activeSection} onClick={scrollToSection} />
            <NavLink id="photos" label="Photos" activeSection={activeSection} onClick={scrollToSection} />
            <NavLink id="projects" label="Personal Projects" activeSection={activeSection} onClick={scrollToSection} />
            <NavLink id="contact" label="Contact" activeSection={activeSection} onClick={scrollToSection} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2"
              aria-label="Toggle mobile menu"
            >
              <i className={`${isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-2">
            <NavLink id="home" label="Home" activeSection={activeSection} onClick={scrollToSection} mobile />
            <NavLink id="about" label="About" activeSection={activeSection} onClick={scrollToSection} mobile />
            <NavLink id="experience" label="Experience" activeSection={activeSection} onClick={scrollToSection} mobile />
            <NavLink id="skills" label="Skills" activeSection={activeSection} onClick={scrollToSection} mobile />
            <NavLink id="photos" label="Photos" activeSection={activeSection} onClick={scrollToSection} mobile />
            <NavLink id="projects" label="Personal Projects" activeSection={activeSection} onClick={scrollToSection} mobile />
            <NavLink id="contact" label="Contact" activeSection={activeSection} onClick={scrollToSection} mobile />
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="pt-20"> {/* Padding top to account for fixed header */}
        {/* Home/Hero Section */}
        <section id="home" className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Hi, I'm <span className="text-indigo-600">Ranjan</span> {/* Changed to just Ranjan */}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              An <span className="font-semibold text-indigo-500">Experienced Professional in the Simulation Domain</span>,
              skilled in Process Optimisation solutions for multiple process industries.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Experience
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-50 hover:text-indigo-700 transition duration-300 transform hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={portfolioData.profilePhotoUrl}
              alt="Ranjan Ottemada Appanna"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-indigo-200"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/667EEA/ffffff?text=Image+Not+Found"; }}
            />
          </div>
        </section>

        {/* About Me Section (Professional Summary) */}
        <section id="about" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Professional Summary</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
              <p>{portfolioData.summary}</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>
            <div className="max-w-4xl mx-auto space-y-12">
              {portfolioData.experience.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-[1.01] transition duration-300">
                  <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                  <p className="text-indigo-600 text-lg mb-2">{job.company}</p>
                  <p className="text-gray-600 mb-4">{job.duration}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {job.description.map((line, lineIndex) => (
                      <li key={lineIndex} dangerouslySetInnerHTML={{ __html: line }}></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Skills & Expertise</h2>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {portfolioData.skills.split(',').map((skill, index) => (
                  <SkillTag key={index} text={skill.trim()} />
                ))}
              </div>
            </div>
            {/* Honors & Awards section removed */}
          </div>
        </section>

        {/* Photo Section */}
        <section id="photos" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">My Photo</h2>
            <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-xl text-center border border-gray-200">
              <p className="text-lg text-gray-700 mb-6">
                This is my professional photo.
              </p>
              <div className="mb-6 flex justify-center">
                <img
                  src={portfolioData.profilePhotoUrl}
                  alt="Ranjan Ottemada Appanna"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-indigo-200"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/667EEA/ffffff?text=Image+Not+Found"; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Personal Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 border border-gray-200">
                  <img
                    src={project.thumbnail} // This will now use the specific thumbnail for each project
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/9CA3AF/ffffff?text=Image+Not+Found"; }}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.split(',').map((tech, techIndex) => (
                        <span key={techIndex} className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-start space-x-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition duration-300"
                        >
                          <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block border border-gray-400 text-gray-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300"
                        >
                          <i className="fab fa-github mr-2"></i>GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>
            <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-xl text-center border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="space-y-2 mb-8">
                <p className="text-gray-800 text-lg">
                  <i className="fas fa-envelope text-indigo-500 mr-2"></i>
                  <a href={`mailto:${portfolioData.contactEmail}`} className="text-indigo-600 hover:underline">
                    {portfolioData.contactEmail}
                  </a>
                </p>
                <p className="text-gray-800 text-lg">
                  <i className="fab fa-linkedin text-indigo-500 mr-2"></i>
                  <a href={portfolioData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                    {portfolioData.linkedinUrl}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-6 mt-12 text-gray-600">
              <a href={portfolioData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition duration-300">
                  <i className="fab fa-linkedin text-3xl"></i>
                </a>
              {portfolioData.githubUrl && (
                <a href={portfolioData.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition duration-300">
                  <i className="fab fa-github text-3xl"></i>
                </a>
              )}
              <a href={`mailto:${portfolioData.contactEmail}`} className="hover:text-indigo-600 transition duration-300">
                <i className="fas fa-envelope text-3xl"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Ranjan Ottemada Appanna. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

// NavLink Component for cleaner navigation
const NavLink = ({ id, label, activeSection, onClick, mobile }) => {
  const baseClasses = "block text-gray-600 hover:text-indigo-600 transition duration-300";
  const desktopClasses = "px-3 py-2 rounded-md font-medium text-lg";
  const mobileClasses = "px-4 py-2 text-base";
  const activeClasses = "text-indigo-600 font-bold";

  return (
    <a
      href={`#${id}`}
      onClick={() => onClick(id)}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses} ${activeSection === id ? activeClasses : ''}`}
    >
      {label}
    </a>
  );
};

// SkillTag Component for displaying skills
const SkillTag = ({ text }) => (
  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:bg-blue-200 transition duration-200">
    {text}
  </span>
);

export default App;
