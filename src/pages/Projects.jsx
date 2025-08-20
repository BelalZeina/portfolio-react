import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'; // Install: `npm install react-helmet-async`
import { Typography } from '@mui/material';
const Projects = () => {
  const projects = [
    {
      id: 16,
      name: 'ديار النخبة',
      image: 'images/deiyar.png',
      url: "https://deiyar.com/",
      technologies: [ 'React','Laravel', 'MySQL'],
    },
    {
      id: 1,
      name: 'podcastonly',
      image: 'images/profile.png',
      url: "https://podcastonly.me/",
      technologies: [ 'React','Laravel', 'MySQL'],
    },
    {
      id: 2,
      name: 'hayatdiscount',
      image: 'images/hayat.png',
      url: "https://hayatdiscount.com/",
      technologies: [ 'Laravel',"React", 'MySQL'],
    },
    {
      id: 3,
      name: 'Seazera',
      image: 'images/seazera-1.png',
      url: "https://seazera.softwareconnect.net/",
      technologies: [ 'Laravel',"Livewire", 'MySQL'],
    },
    {
      id: 4,
      name: 'GridShop',
      image: 'images/grid_shop.png',
      url: "https://ecommerce.softwareconnect.net/",
      technologies: [ 'Laravel',"Livewire", 'MySQL'],
    },
    {
      id: 5,
      name: 'nilevalley',
      image: 'images/nile-1.png',
      url: "https://nilevalley-eg.com/",
      technologies: [ 'Laravel', 'MySQL'],
    },
    {
      id: 6,
      name: 'hassanfarag',
      image: 'images/hassanfarag.png',
      url: "https://hassanfaragimportexport.com/",
      technologies: [ 'Laravel', 'MySQL'],
    },
        {
      id: 9,
      name: 'e-menu',
      image: 'images/66d9e0f4602e9_project_image_1719919820.png',
      url: 'https://demo.uguest.net/1/menu',
      technologies: ['React', 'Laravel', 'MySQL'],
    },
    {
      id: 10,
      name: 'mjohar',
      image: 'images/66d9e113a47f7_project_image_1719917535.png',
      url: 'https://mjohar.net/',
      technologies: ['React', 'Laravel', 'MySQL'],
    },
    {
      id: 11,
      name: 'johar',
      image: 'images/66d9e12b74d76_project_image_1719917628.png',
      url: 'https://johar-dashboard.tek-part.com/',
      technologies: ['React', 'Laravel', 'MySQL'],
    },
    {
      id: 12,
      name: 'Alm',
      image: 'images/66d9e6e1b90bb_Your first design - Large rectangle - 336x280 (1).png',
      url: 'https://alam.foundation/',
      technologies: ['React', 'Laravel', 'MySQL'],
    },
    {
      id: 13,
      name: 'smart switch',
      image: 'images/smart_switch.png',
      url: 'https://smartswitch-eg.com/',
      technologies: ['React', 'Laravel', 'MySQL'],
    },
    {
      id: 15,
      name: 'Number geniuses',
      image: 'images/Number geniuses.png',
      url: 'https://academy.softwareconnect.net/',
      technologies: ['React', 'Laravel', 'MySQL'],
    },
    {
      id: 14,
      name: 'online order',
      image: 'images/online-order.png',
      url: 'https://online-order.net/',
      technologies: ["Livewire",'Laravel', 'MySQL'],
    },
    {
      id: 7,
      name: 'مشترياتك',
      image: 'images/66d9e1e9455ff_project_image_1719920073.png',
      url: null,
      technologies: [ 'Laravel', 'MySQL'],
    },
    {
      id: 8,
      name: 'helnt',
      image: 'images/66d9e0bed94a1_project_image_1719919564.png',
      url: 'https://helnt.com/',
      technologies: ['React', 'Laravel', 'MySQL'],
    },

  ];

  return (
    <div className="container py-5">
      <Helmet>
        <title>Belal Zeina | Projects</title>
        <meta name="description" content="Learn about Belal Zeina's web development projects." />
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
              MY RECENT COMPLETED PROJECTS
            </Typography>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-sm-6 col-md-4">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="card h-100 shadow-sm border-0 bg-light bg-opacity-10"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h3 className="h5 fw-bold"   style={{
                      background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {project.name}
                  </h3>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="badge bg-primary bg-opacity-10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.url && (
                  <div className="card-footer bg-transparent border-0 d-flex gap-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      <FaExternalLinkAlt className="me-1" />
                      Visit Project
                    </a>
                    {/* <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      <FaGithub className="me-1" />
                      View Code
                    </a> */}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects; 