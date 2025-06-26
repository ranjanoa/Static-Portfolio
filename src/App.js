import React, { useState, useEffect } from 'react';

// --- Main App Component (Static) ---
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0); // State for project carousel

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
        thumbnail: 'https://drive.google.com/thumbnail?id=1L-L0ivvqoZNc_BRZig7rOL5Az6cRkiux&sz=w600',
        liveLink: 'https://analyser-alpha.vercel.app/',
        githubLink: null,
        techStack: 'AI, Document Analysis, Simulation Parameters'
      },
      {
        id: 'proj4',
        title: 'HydroSense Pipeline Monitor: Leak Detection & Analysis', // New project title
        description: 'HydroSense is a web-based application designed to simulate and monitor pipeline hydraulic behavior, with a focus on real-time leak detection and analysis. It utilizes the **Method of Characteristics (MOC)** to model transient flow conditions within the pipeline.', // New project description
        thumbnail: 'https://drive.google.com/thumbnail?id=1xqFWNVlDkJJwq8q7P_6FGlhqkCQ7TLCa&sz=w600', // UPDATED thumbnail
        liveLink: 'https://hydrosense-app-repo-nd6h.vercel.app/', // New live demo link
        githubLink: null, // GitHub link removed
        techStack: 'Hydraulic Simulation, MOC, Real-time Monitoring, Leak Detection' // New tech stack
      }
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

  // Effect for auto-playing project carousel on homepage
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) =>
        (prevIndex + 1) % portfolioData.projects.length
      );
    }, 5000); // Change project every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [portfolioData.projects.length]); // Re-run if number of projects changes

  const displayedProject = portfolioData.projects[currentProjectIndex];


  return (
    // Base dark background and text color for a digital theme
    <div className="font-sans text-gray-100 antialiased min-h-screen bg-gray-900">
      <style>
        {`
        /* Subtle glowing grid background effect */
        body {
          background: #0d0d0d; /* Dark background */
          background-image: radial-gradient(circle at center, rgba(30, 0, 70, 0.2) 0%, transparent 70%),
                            linear-gradient(to right, rgba(0, 100, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 100, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Specific styles for the project showcase container */
        .project-showcase-container {
          position: relative;
          width: 90%; /* Take full width of its parent */
          max-width: 1200px; /* Max width for larger screens if parent allows */
          height: 250px; /* Fixed height for the showcase */
          overflow: hidden; /* Hide overflowing content during transitions */
          border-radius: 0.75rem; /* Rounded corners */
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); /* Cyan glowing shadow */
          background-color: rgba(17, 24, 39, 0.85); /* Darker, slightly transparent background */
          border: 1px solid rgba(0, 255, 255, 0.2); /* Subtle cyan border */
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .project-showcase-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row; /* Side-by-side content */
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          opacity: 0; /* Hidden by default for transitions */
          transition: opacity 1s ease-in-out, transform 0.8s ease; /* Fade and slide transition */
          transform: translateY(20px); /* Initial state for slide-in */
        }

        /* Active card visibility and animation */
        .project-showcase-card.active {
          opacity: 1;
          transform: translateY(0); /* Final state for slide-in */
        }
        /* For the exiting card, ensure it slides out downwards */
        .project-showcase-card:not(.active) {
            transform: translateY(-20px); /* Slide up on exit or inactive */
            opacity: 0;
        }


        .project-showcase-image-wrapper {
          flex: 0 0 auto;
          width: 180px;
          height: 180px;
          margin-right: 2rem;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.3); /* Glowing image shadow */
          border: 1px solid rgba(0, 255, 255, 0.3);
        }

        .project-showcase-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-showcase-content {
          flex: 1;
          text-align: left;
        }

        .project-showcase-title {
          font-size: 1.75rem;
          font-weight: bold;
          color: #00e6e6; /* Vibrant cyan title */
          margin-bottom: 0.75rem;
        }

        .project-showcase-description {
          font-size: 1rem;
          color: #a0aec0; /* Lighter gray for readability */
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .project-showcase-link {
          display: inline-flex;
          align-items: center;
          color: #66e6ff; /* Lighter cyan link color */
          font-weight: 600;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .project-showcase-link:hover {
          color: #00ffff; /* Brighter on hover */
        }

        /* Adjustments for general text color and background contrast */
        .text-gray-900 { color: #e2e8f0; } /* Light gray on dark background */
        .text-gray-600 { color: #cbd5e0; } /* Lighter gray for general text */
        .text-indigo-600 { color: #66e6ff; } /* Cyan for primary accents */
        .text-indigo-500 { color: #00e6e6; } /* Brighter cyan for highlights */
        .text-blue-100, .text-purple-100, .text-pink-100, .text-indigo-50, .text-blue-50, .text-yellow-50, .text-red-50, .text-green-50, .text-teal-50 {
            background-color: transparent; /* Remove light background colors from sections if desired */
            color: inherit; /* Inherit text color from parent */
        }
        /* Specific section background adjustments */
        section {
            background-color: #1a202c; /* Darker background for sections */
            color: #e2e8f0; /* Light text for sections */
            border-top: 1px solid rgba(0, 255, 255, 0.1); /* Subtle digital border */
            border-bottom: 1px solid rgba(0, 255, 255, 0.1);
        }
        /* Override specific section gradients if they clash with the new theme */
        #about, #experience, #skills, #photos, #projects, #contact {
            background: #1a202c; /* Ensure consistent dark background */
        }
        /* Adjust inner white cards on dark backgrounds */
        .bg-white {
            background-color: rgba(255, 255, 255, 0.05); /* Very subtle white for cards */
            border: 1px solid rgba(0, 255, 255, 0.1); /* Subtle cyan border for cards */
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.1); /* Subtle glow for cards */
        }
        `}
      </style>

      {/* CDN scripts for Tailwind and Font Awesome are retained */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>

      {/* Header/Navigation */}
      <header className="fixed w-full bg-gray-800 shadow-lg z-50 rounded-b-lg"> {/* Darker header */}
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo/Name */}
          <a href="#home" onClick={() => scrollToSection('home')} className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition duration-300 rounded-md p-2">
            Ranjan Ottemada Appanna
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
              className="text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md p-2"
              aria-label="Toggle mobile menu"
            >
              <i className={`${isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 shadow-lg py-2"> {/* Darker mobile menu */}
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
        {/* This section now contains both the main hero content AND the project showcase below it */}
        <section id="home" className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-gray-100"> {/* Adjusted text color for readability */}
          {/* Top part of Home Section: Text, Buttons, Profile Photo */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8"> {/* Added mb-8 for spacing before carousel */}
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-100 leading-tight mb-4"> {/* Light text for headings */}
                Hi, I'm <span className="text-teal-400">Ranjan</span> {/* Vibrant accent color */}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6"> {/* Lighter gray for main text */}
                An <span className="font-semibold text-teal-300">Experienced Professional in the Simulation Domain</span>,
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
                {/* CV Download Button */}
                <a
                  href="https://drive.google.com/uc?export=download&id=18vBgSzu94-m9JEs0IO5wBuZZ_zFLBgAs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <i className="fas fa-file-alt mr-2"></i> Download CV
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <img
                src={portfolioData.profilePhotoUrl}
                alt="Ranjan Ottemada Appanna"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-teal-500"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/1F2937/ffffff?text=Image+Not+Found"; }}
              />
            </div>
          </div>

          {/* Animated Project Showcase Section - Now directly below the above content, still within #home */}
          {portfolioData.projects.length > 0 && ( /* Only render if there are projects */
            <div className="w-full flex items-center justify-center py-8 md:py-12">
              <div className="project-showcase-container">
                {portfolioData.projects.map((project, index) => (
                  <div
                    key={project.id}
                    // Using inline style for opacity to control fade transition via React state
                    // Also managing z-index to ensure only the active project is fully visible
                    style={{ opacity: index === currentProjectIndex ? 1 : 0, zIndex: index === currentProjectIndex ? 10 : 1 }}
                    className={`project-showcase-card`}
                  >
                    <div className="project-showcase-image-wrapper">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="project-showcase-image"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/1F2937/ffffff?text=Project"; }}
                      />
                    </div>
                    <div className="project-showcase-content">
                      <h3 className="project-showcase-title">
                        {project.title}
                      </h3>
                      <p className="project-showcase-description">
                        {project.description.length > 150 ? project.description.substring(0, 150) + '...' : project.description}
                      </p>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-showcase-link"
                        >
                          View Demo <i className="fas fa-arrow-right text-xs ml-1"></i>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>


        {/* About Me Section (Professional Summary) */}
        <section id="about" className="bg-gray-800 py-16 md:py-24 text-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Professional Summary</h2>
            <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-6 text-gray-300">
              <p>{portfolioData.summary}</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-gray-900 py-16 md:py-24 text-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Professional Experience</h2>
            <div className="max-w-4xl mx-auto space-y-12">
              {portfolioData.experience.map((job) => (
                <div key={job.id} className="bg-gray-800 rounded-lg shadow-xl p-8 transform hover:scale-[1.01] transition duration-300 border border-teal-700">
                  <h3 className="text-2xl font-bold text-gray-100">{job.title}</h3>
                  <p className="text-teal-400 text-lg mb-2">{job.company}</p>
                  <p className="text-gray-300 mb-4">{job.duration}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
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
        <section id="skills" className="bg-gray-800 py-16 md:py-24 text-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Skills & Expertise</h2>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {portfolioData.skills.split(',').map((skill, index) => (
                  <SkillTag key={index} text={skill.trim()} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Photo Section */}
        <section id="photos" className="bg-gray-900 py-16 md:py-24 text-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Photo</h2>
            <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl text-center border border-teal-700">
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                This is my professional photo.
              </p>
              <div className="mb-6 flex justify-center">
                <img
                  src={portfolioData.profilePhotoUrl}
                  alt="Ranjan Ottemada Appanna"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-teal-500"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/1F2937/ffffff?text=Image+Not+Found"; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-gray-800 py-16 md:py-24 text-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Personal Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project) => (
                <div key={project.id} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 border border-teal-700">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/1F2937/ffffff?text=Image+Not+Found"; }}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-100 mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.split(',').map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-700 text-teal-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
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
                          className="inline-block bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-500 transition duration-300"
                        >
                          <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block border border-gray-600 text-gray-300 px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition duration-300"
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
        <section id="contact" className="py-16 md:py-24 bg-gray-900 text-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Get in Touch</h2>
            <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl text-center border border-teal-700">
              <p className="text-lg leading-relaxed mb-4 text-gray-300">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="space-y-2 mb-8">
                <p className="text-gray-100 text-lg">
                  <i className="fas fa-envelope text-teal-400 mr-2"></i>
                  <a href={`mailto:${portfolioData.contactEmail}`} className="text-teal-300 hover:underline">
                    {portfolioData.contactEmail}
                  </a>
                </p>
                <p className="text-gray-100 text-lg">
                  <i className="fab fa-linkedin text-teal-400 mr-2"></i>
                  <a href={portfolioData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">
                    {portfolioData.linkedinUrl}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-6 mt-12 text-gray-400">
              <a href={portfolioData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition duration-300">
                  <i className="fab fa-linkedin text-3xl"></i>
                </a>
              {portfolioData.githubUrl && (
                <a href={portfolioData.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition duration-300">
                  <i className="fab fa-github text-3xl"></i>
                </a>
              )}
              <a href={`mailto:${portfolioData.contactEmail}`} className="hover:text-teal-400 transition duration-300">
                <i className="fas fa-envelope text-3xl"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-teal-700">
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
  const baseClasses = "block transition duration-300";
  const desktopClasses = "px-3 py-2 rounded-md font-medium text-lg";
  const mobileClasses = "px-4 py-2 text-base";
  // Adjust colors for dark theme
  const activeColorClasses = "text-teal-400 font-bold";
  const inactiveColorClasses = "text-gray-300 hover:text-teal-200";

  return (
    <a
      href={`#${id}`}
      onClick={() => onClick(id)}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses} ${activeSection === id ? activeColorClasses : inactiveColorClasses}`}
    >
      {label}
    </a>
  );
};

// SkillTag Component for displaying skills
const SkillTag = ({ text }) => (
  // Adjust colors for dark theme
  <span className="bg-gray-700 text-teal-300 text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:bg-gray-600 transition duration-200">
    {text}
  </span>
);

export default App;
