import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'; // Install: `npm install react-helmet-async`
import { Typography, Button, Pagination, Box } from '@mui/material';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // Adjust this number as needed

  const projects = [
    {
      id: 17,
      name: 'delw2ty',
      image: 'images/delw2ty.png',
      url: "https://delw2ty.com/",
      technologies: [ 'React','Laravel','Livewire', 'MySQL'],
    },
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
      url: "https://seazera.ashraf.zone/",
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

  // Calculate pagination values
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  
  // Get current projects to display
  const currentProjects = useMemo(() => {
    return projects.slice(startIndex, endIndex);
  }, [projects, startIndex, endIndex]);

  // Handle page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    // Scroll to the projects grid
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
      projectsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };



  return (
    <div className="container py-5 projects-grid">
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
            mb: 4,
            fontWeight: 800,
            background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          MY RECENT COMPLETED PROJECTS
        </Typography>



        {/* Projects Grid */}
        <motion.div
          key={currentPage} // This will trigger animation when page changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          
        >
          <div className="row g-4">
            {currentProjects.map((project, index) => (
              <div key={project.id} className="col-12 col-sm-6 col-md-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 // Stagger animation
                  }}
                  whileHover={{ y: -10 }}
                  className="card h-100 shadow-sm border-0 bg-light bg-opacity-10"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h3 
                      className="h5 fw-bold"   
                      style={{
                        background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {project.name}
                    </h3>
                    <div className="d-flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          style={{background: 'linear-gradient(45deg, #64b5f6, #f48fb1)'}}
                          className="badge bg-opacity-10 text-dark"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.url && (
                    <div className="card-footer bg-transparent border-0 d-flex gap-2">
                      <Button
                        href={project.url}
                        variant="outlined"
                        target="_blank"
                        size="small"
                        sx={{
                          px: 2,
                          padding: .3,
                          marginBottom: 1,
                          borderColor: '#64b5f6',
                          color: '#64b5f6',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            borderWidth: 2,
                            background: 'linear-gradient(45deg, rgba(100, 181, 246, 0.1), rgba(244, 143, 177, 0.1))',
                            borderColor: '#f48fb1'
                          }
                        }}
                      >
                        <FaExternalLinkAlt className="ms-1 me-1" />
                        <span className='me-1'>Visit Project</span>
                      </Button>
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pagination Controls - Choose one of these options */}
        
        {/* Option 1: Custom Bootstrap-styled pagination */}
        {/* <PaginationControls /> */}

        {/* Option 2: Material-UI Pagination (uncomment to use this instead) */}
        
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            sx={{
              '& .MuiPaginationItem-root': {
                background: 'linear-gradient(45deg, rgba(100, 181, 246, 0.1), rgba(244, 143, 177, 0.1))',
                border: '1px solid #64b5f6',
                '&:hover': {
                  background: 'linear-gradient(45deg, rgba(100, 181, 246, 0.2), rgba(244, 143, 177, 0.2))',
                },
                '&.Mui-selected': {
                  background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #42a5f5, #f06292)',
                  }
                }
              }
            }}
          />
        </Box>
              {/* Projects count and page info */}
        <div className="text-center mt-3">
          <small className="">
            Showing {startIndex + 1}-{Math.min(endIndex, projects.length)} of {projects.length} projects
            (Page {currentPage} of {totalPages})
          </small>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;