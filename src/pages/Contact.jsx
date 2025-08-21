import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // Install: `npm install react-helmet-async`
import { Typography } from '@mui/material';
import {  useContext } from 'react';

import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { ThemeContext } from '../App';



const Contact = () => {

  const { isDark } = useContext(ThemeContext);
  const contactMethods = [
  {
    icon: <FaFacebook size={40} className="text-primary" />,
    title: 'Belal Zeina',
    description: 'Stay tuned, follow for updates! 🌐',
    linkText: 'Follow me on Facebook',
    link: 'https://www.facebook.com/people/Belal-Zeina/pfbid0Kv6C7yRLXzV9rSmF3unkGsN8c29HbjwmWQSD1fD8Y9jJLnYSwwXXW9XN1Wp6tVJEl/',
  },
  {
    icon: <FaGithub size={40} className={isDark ? 'text-white' : 'text-dark'} />,
    title: 'Belal Zeina',
    description: 'Explore my code on GitHub! 💻',
    linkText: 'GitHub Profile',
    link: 'https://github.com/BelalZeina',
  },
  {
    icon: <FaLinkedin size={40} className="text-primary" />,
    title: 'Belal Zeina',
    description: `Let's connect on LinkedIn! 🧑‍🤝‍🧑`,
    linkText: 'Connect with me',
    link: 'https://www.linkedin.com/in/belal-zeina-a53190220',
  },
  {
    icon: <FaWhatsapp size={40} className="text-success" />,
    title: '(+20) 109 668 5149',
    description: 'Chat with me on WhatsApp! 📱',
    linkText: 'Start Chat',
    link: 'https://wa.me/+201096685149',
  },
  {
    icon: <FaPhone size={40} className="text-primary" />,
    title: '+201096685149',
    description: `Let's talk! Give me a ring! 📞`,
    linkText: 'Call Me',
    link: 'tel:+201096685149',
  },
];
  return (
  <div className="container py-5">
    <Helmet>
      <title>Belal Zeina | contact</title>
      <meta name="description" content="contact with Belal Zeina now." />
    </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 6,
                fontWeight: 800,
                background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              CONTACT ME
        </Typography>

    <div className="row g-4 justify-content-center">
      {contactMethods.slice(0, 2).map((method, idx) => (
        <div className="col-12 col-md-6" key={idx}>
          <div className="card h-100  shadow-sm"   style={{
                background: isDark ? 'rgb(26, 26, 26)' : '#fff'
              }}>
            <div className={`card-body text-center d-flex flex-column align-items-center gap-2 pt-4 ${
                isDark ? 'text-white' : 'text-dark'
              }`}>
              {method.icon}
              <h3 className="h5 fw-bold mt-2">{method.title}</h3>
              <p className="mb-2">{method.description}</p>
              <a 
                href={method.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{    background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'}}
                className="text-decoration-none fw-medium"
              >
                {method.linkText}
              </a>
            </div>
          </div>
        </div>
      ))}
      {contactMethods.slice(2, 4).map((method, idx) => (
        <div className="col-12 col-md-6" key={idx+2}>
          <div className="card h-100   shadow-sm"     style={{
                background: isDark ? 'rgb(26, 26, 26)' : '#fff'
              }}>
            <div className={`card-body text-center d-flex flex-column align-items-center gap-2 pt-4 ${
                isDark ? 'text-white' : 'text-dark'
              }`}>
              {method.icon}
              <h3 className="h5 fw-bold mt-2">{method.title}</h3>
              <p className="text-sm mb-2">{method.description}</p>
              <a 
                href={method.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{    background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'}}
                className="text-decoration-none fw-medium"
              >
                {method.linkText}
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="col-12">
        <div className="card   shadow-sm"     style={{
                background: isDark ? 'rgb(26, 26, 26)' : '#fff'
              }}>
          <div className={`card-body text-center d-flex flex-column align-items-center gap-2 pt-4 ${
                isDark ? 'text-white' : 'text-dark'
              }`}>
            {contactMethods[4].icon}
            <h3 className="h5 fw-bold mt-2">{contactMethods[4].title}</h3>
            <p className="text-small mb-2">{contactMethods[4].description}</p>
            <a 
              href={contactMethods[4].link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{    background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'}}
              className="text-decoration-none fw-medium"
            >
              {contactMethods[4].linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  </div>
  );
};

export default Contact;