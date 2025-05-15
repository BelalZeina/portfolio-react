import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaPalette, FaLink, FaServer, FaCogs  } from 'react-icons/fa';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Services from './Services';

const Home = () => {
  const skills = [
    {
      icon: <FaCode size={40} className="text-primary" />,
      title: 'Frontend Development',
      description: 'React.js, Bootstrap, Responsive Design',
    },
    {
      icon: <FaDatabase size={40} className="text-primary" />,
      title: 'Backend Development',
      description: 'Laravel, PHP, MySQL, RESTful APIs',
    },
    {
      icon: <FaPalette size={40} className="text-primary" />,
      title: 'UI/UX Design',
      description: 'Modern Interfaces, User Experience',
    },
  ];

  const services = [
    {
      icon: <FaLink size={48} className="text-primary" />,
      title: 'Full-Stack Wizardry',
      description: 'Seamlessly bridge the gap between frontend elegance and backend robustness. I specialize in full-stack development, ensuring your web projects are crafted with expertise on both ends.'
    },
    {
      icon: <FaPalette size={48} className="text-primary" />,
      title: 'Responsive Design Mastery',
      description: 'Delight your users with websites that adapt flawlessly to any device. My frontend skills ensure a visually stunning and responsive user interface, offering an optimal experience on every screen.'
    },
    {
      icon: <FaServer size={48} className="text-primary" />,
      title: 'Backend Architectural Prowess',
      description: 'Power up your applications with a strong and efficient backend architecture. I bring extensive backend experience, ensuring your web solutions are secure, scalable, and performant.'
    },
    {
      icon: <FaDatabase size={48} className="text-primary" />,
      title: 'Data Dynamo',
      description: 'Efficiently manage and organize your data. From relational databases to NoSQL solutions, I implement backend systems that handle your data seamlessly, ensuring reliability and performance.'
    },
    {
      icon: <FaCogs size={48} className="text-primary" />,
      title: 'API Alchemy',
      description: 'Craft robust APIs to connect and communicate between frontend and backend components. I specialize in API development, facilitating smooth interactions and data flow in your applications.'
    },
    {
      icon: <FaCogs size={48} className="text-primary" />,
      title: 'End-to-End Project Expertise',
      description: 'Beyond coding, I bring project management skills to ensure a streamlined development process. From concept to deployment, your web project is in capable hands.'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-vh-100 d-flex align-items-center py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-3 fw-bold text-primary mb-3">
                  Belal Ashraf Zeina
                </h1>
                <h2 className="h2 mb-4">
                  Full Stack Web Developer
                </h2>
                <p className="lead text-muted mb-4">
                  A seasoned Full Stack Web Developer with a passion for continuous learning
                  and professional growth. Specializing in PHP and Laravel development.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Link to="projects" className="btn btn-primary btn-lg px-4">
                    View Projects
                  </Link>
                  <Link to="contact" className="btn btn-outline-primary btn-lg px-4">
                    Contact Me
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="position-relative rounded-4 overflow-hidden shadow-lg">
                  <img
                    src="images/profile.jpg"
                    alt="Belal Zeina"
                    className="img-fluid w-100 d-none d-md-block"
                    style={{ objectFit: 'cover', height: '650px' }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about"><About /></section>
      {/* Services Section */}
      <section id="services"><Services /></section>
      {/* Projects Section */}
      <section id="projects"><Projects /></section>
      {/* Contact Section */}
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default Home; 