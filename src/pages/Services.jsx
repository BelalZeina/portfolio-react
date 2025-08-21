import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // Install: `npm install react-helmet-async`
import { Typography,useTheme} from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { 
    FaCode, 
    FaPalette, 
    FaServer, 
    FaDatabase, 
    FaPlug, 
    FaCogs 
  } from 'react-icons/fa';
const Services = () => {
  const { isDark } = useContext(ThemeContext);
  const theme = useTheme();
    const services = [
        {
          icon: <FaCode size={48} className='text-dark' />,
          title: "Full-Stack Wizardry",
          description: "Seamlessly bridge the gap between frontend elegance and backend robustness."
        },
        {
          icon: <FaPalette size={48} className='text-dark' />,
          title: "Responsive Design Mastery",
          description: "Delight your users with websites that adapt flawlessly to any device."
        },
        {
          icon: <FaServer size={48} className='text-dark' />,
          title: "Backend Architectural Prowess",
          description: "Power up your applications with a strong and efficient backend architecture."
        },
        {
          icon: <FaDatabase size={48} className='text-dark' />,
          title: "Data Dynamo",
          description: "Efficiently manage and organize your data."
        },
        {
          icon: <FaPlug size={48} className='text-dark' />,
          title: "API Alchemy",
          description: "Craft robust APIs to connect and communicate."
        },
        {
          icon: <FaCogs size={48} className='text-dark' />,
          title: "End-to-End Project Expertise",
          description: "Beyond coding, I bring project management skills."
        },
      ];

  return (
    <section className="py-5">
      <Helmet>
        <title>Belal Zeina | Servises</title>
        <meta name="description" content="Learn about Belal Zeina's web development servises." />
      </Helmet>
      <div className="container">
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
              OFFERINGS TO MY CLIENTS
            </Typography>
        <p className="text-center mb-5 lead">
          Crafting Web Experiences! From sleek designs to dynamic apps...
        </p>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: 'linear-gradient(45deg, #64b5f6, #f48fb1)' }}>
                <div className={`fs-1 mb-3 ${isDark? "text-white":"text-dark"}`}>{service.icon}</div>
                <h3 className={`h5 fw-bold ${isDark? "text-white":"text-dark"}`}>{service.title}</h3>
                <p className={` ${isDark? "text-white":"text-dark"}`}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;