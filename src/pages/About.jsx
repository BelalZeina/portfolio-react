import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; 

import { 
  FaBriefcase, 
  FaGraduationCap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub ,
  FaLaravel,
  FaPhp,
  FaDatabase,
  FaTerminal,
  FaGitAlt,
  FaUsers
} from 'react-icons/fa';
import { 
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiLivewire,
} from 'react-icons/si';
import { GrProjects } from 'react-icons/gr';

const About = () => {
  const experience = {
    title: "WORK EXPERIENCE",
    institution: "Tek-Part company",
    position: "Backend Developer",
    startDate: "2023-01-12",
    endDate: "2024-01-9",
    description: [
      "Developed and maintained backend systems using PHP and the Laravel framework",
      "Designed and optimized MySQL databases",
      "Implemented RESTful APIs",
      "Collaborated with frontend developers",
      "Conducted code reviews",
      "Participated in Agile development methodologies",
      "Developed comprehensive documentation"
    ]
  };

  const education = {
    title: "Education",
    position: "BACHELOR OF Artificial Intelligence",
    institution: "Faculty of Artificial Intelligence At Kafr El-sheikh University",
    startDate: "2021-09-01",
    endDate: "2025-08-01",
    description: [
      "Machine Learning and Information Retrieval",
      "Robotics and Intelligent Machines",
      "Embedded Network Systems Technology",
      "Data Science"
    ]
  };

  const tools = [
    {
      name: "HTML",
      icon: <FaHtml5 size={24} className='text-primary' />
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={24} className="text-primary" />
    },
    {
      name: "JavaScript",
      icon: <FaJs size={24} className="text-primary" />
    },
    {
      name: "jQuery",
      icon: <SiJquery size={24} className="text-primary" />
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap size={24} className="text-primary" />
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss size={24} className="text-primary" />
    },
    {
      name: "Laravel",
      icon: <FaLaravel size={24} className="text-primary" />
    },
    {
      name: "PHP",
      icon: <FaPhp size={24} className="text-primary" />
    },
    {
      name: "MySQL",
      icon: <FaDatabase size={24} className="text-primary" />
    },
    {
      name: "Livewire",
      icon: <SiLivewire size={24} className="text-primary" />
    },
    {
      name: "Git",
      icon: <FaGitAlt size={24} className="text-primary" />
    },
    {
      name: "SSH",
      icon: <FaTerminal  size={24} className="text-primary" />
    }
  ];

  return (
    <div className="container py-5">
      <Helmet>
        <title>About Belal Zeina | Web Developer</title>
        <meta name="description" content="Learn about Belal Zeina's web development skills." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="display-4 text-center mb-5 fw-bold">
          ABOUT ME
        </h2>

        <div className="mb-5">
          <h3 className="h3 mb-4">Personal Information</h3>
          <div className="row">
            <div className="col-md-12">
              <p className="lead mb-3">
                Hello, I'm Belal Zeina — a dedicated Full Stack Web Developer with a strong passion for continuous learning and professional excellence.              
              </p>
              <p className="lead mb-3">
                I bring extensive experience in both front-end and back-end development, with a particular focus on building responsive, user-centric interfaces and robust server-side solutions.              
              </p>
              <p className="lead mb-3">
                I specialize in developing modern front-end experiences, and I’m highly proficient in Laravel for back-end development, including building secure and scalable APIs. I thrive in collaborative environments, use GitHub for version control, and am always eager to tackle new challenges.
              </p>
              <p>
                Take a look at my projects to see the quality and versatility of my work.
              </p>

              {/* Stats Section */}
              <div className="row mt-4">
                <div className="col-4 text-center">
                <div className="h2 mb-0"><GrProjects className='text-primary' /></div>
                  <h4 className="h2 mb-0">+20</h4>
                  <p className="text-muted">Projects</p>
                </div>
                <div className="col-4 text-center">
                <div className="h2 mb-0"><FaGithub className='text-primary' /></div>
                  <h4 className="h2 mb-0">+75</h4>
                  <p className="text-muted">GitHub Repos</p>
                </div>
                <div className="col-4 text-center">
                  <div className="h2 mb-0"><FaUsers className='text-primary' /></div>
                  <h4 className="h2 mb-0">+25</h4>
                  <p className="text-muted">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Experts Section with Icons */}
        <div className="mb-5">
          <h3 className="h3 mb-4">TOOLS EXPERTS</h3>
          <div className="row">
            {tools.map((tool, index) => (
              <div className="col-md-3 col-6 mb-4" key={index}>
                <div className="d-flex align-items-center gap-3">
                  {tool.icon}
                  <span className="font-weight-bold">{tool.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h3 className="h3 mb-4 d-flex align-items-center gap-2">
            <FaBriefcase className='text-primary' /> Work Experience
          </h3>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title h5">{experience.position}</h4>
              <h6 className="card-subtitle mb-3 text-muted">
                {experience.institution} | {experience.startDate} - {experience.endDate}
              </h6>
              <ul className="list-unstyled">
                {experience.description.map((item, index) => (
                  <li key={index} className="mb-2">
                    <i className="bi bi-check2-circle text-primary me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="h3 mb-4 d-flex align-items-center gap-2">
            <FaGraduationCap className='text-primary' /> Education
          </h3>
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title h5">{education.position}</h4>
              <h6 className="card-subtitle mb-3 text-muted">
                {education.institution} | {education.startDate} - {education.endDate}
              </h6>
              <ul className="list-unstyled">
                {education.description.map((item, index) => (
                  <li key={index} className="mb-2">
                    <i className="bi bi-check2-circle text-primary me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;