import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaPalette, FaLink, FaServer, FaCogs  } from 'react-icons/fa';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Services from './Services';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-vh-100 d-flex align-items-center py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Section - show first on mobile */}
            <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div
                  className="position-relative rounded-4 overflow-hidden shadow-lg mx-auto"
                  style={{ maxWidth: '350px' }}
                >
                  <img
                    src="images/profile.jpg"
                    alt="Belal Zeina"
                    className="img-fluid w-100 rounded-4"
                    style={{ objectFit: 'cover', height: 'auto', maxHeight: '450px' }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Text Content - show after image on mobile */}
            <div className="col-md-6 order-2 order-md-1 text-center text-md-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 fw-bold text-primary mb-3">
                  Belal Ashraf Zeina
                </h1>
                <h2 className="h4 mb-4">Full Stack Web Developer</h2>
                <p className="lead text-muted mb-4">
                  A seasoned Full Stack Web Developer with a passion for continuous learning
                  and professional growth. Specializing in PHP and Laravel development.
                </p>
                <div className="d-flex justify-content-center justify-content-md-start gap-3 flex-wrap">
                  <Link to="projects" className="btn btn-primary btn-lg px-4">
                    View Projects
                  </Link>
                  <Link to="contact" className="btn btn-outline-primary btn-lg px-4">
                    Contact Me
                  </Link>
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