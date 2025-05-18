import React from 'react';
import { motion } from 'framer-motion';

import { 
    FaCode, 
    FaPalette, 
    FaServer, 
    FaDatabase, 
    FaPlug, 
    FaCogs 
  } from 'react-icons/fa';
const Services = () => {
    const services = [
        {
          icon: <FaCode size={48} className='text-primary' />,
          title: "Full-Stack Wizardry",
          description: "Seamlessly bridge the gap between frontend elegance and backend robustness."
        },
        {
          icon: <FaPalette size={48} className='text-primary' />,
          title: "Responsive Design Mastery",
          description: "Delight your users with websites that adapt flawlessly to any device."
        },
        {
          icon: <FaServer size={48} className='text-primary' />,
          title: "Backend Architectural Prowess",
          description: "Power up your applications with a strong and efficient backend architecture."
        },
        {
          icon: <FaDatabase size={48} className='text-primary' />,
          title: "Data Dynamo",
          description: "Efficiently manage and organize your data."
        },
        {
          icon: <FaPlug size={48} className='text-primary' />,
          title: "API Alchemy",
          description: "Craft robust APIs to connect and communicate."
        },
        {
          icon: <FaCogs size={48} className='text-primary' />,
          title: "End-to-End Project Expertise",
          description: "Beyond coding, I bring project management skills."
        },
      ];

  return (
    <section className="py-5">
      <div className="container">
              <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-4 display-5 fw-bold">OFFERINGS TO MY CLIENTS</h2>
        <p className="text-center text-muted mb-5 lead">
          Crafting Web Experiences! From sleek designs to dynamic apps...
        </p>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="fs-1 mb-3">{service.icon}</div>
                <h3 className="h5 fw-bold">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
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