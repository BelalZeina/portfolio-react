import { useState, useMemo , useContext } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'; // Install: `npm install react-helmet-async`
import { Typography, Button, Pagination, Box ,Container, Grid ,Paper ,Chip } from '@mui/material';
import { ThemeContext } from "../App";
const Projects = () => {
  const { isDark } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects = [
    { id: 17, name: 'delw2ty', image: 'images/delw2ty.png', url: "https://delw2ty.com/", technologies: ['React', 'Laravel', 'Livewire', 'MySQL'] },
    { id: 16, name: 'ديار النخبة', image: 'images/deiyar.png', url: "https://deiyar.com/", technologies: ['React', 'Laravel', 'MySQL'] },
    { id: 1, name: 'podcastonly', image: 'images/profile.png', url: "https://podcastonly.me/", technologies: ['React', 'Laravel', 'MySQL'] },
    { id: 2, name: 'hayatdiscount', image: 'images/hayat.png', url: "https://hayatdiscount.com/", technologies: ['Laravel', "React", 'MySQL'] },
    { id: 3, name: 'Seazera', image: 'images/seazera-1.png', url: "https://seazera.ashraf.zone/", technologies: ['Laravel', "Livewire", 'MySQL'] },
    { id: 4, name: 'GridShop', image: 'images/grid_shop.png', url: "https://ecommerce.softwareconnect.net/", technologies: ['Laravel', "Livewire", 'MySQL'] },
    { id: 13, name: 'smart switch', image: 'images/smart_switch.png', url: 'https://smartswitch-eg.com/', technologies: ['React', 'Laravel', 'MySQL'] },
    { id: 5, name: 'nilevalley', image: 'images/nile-1.png', url: "https://nilevalley-eg.com/", technologies: ['Laravel', 'MySQL'] },
    { id: 6, name: 'hassanfarag', image: 'images/hassanfarag.png', url: "https://hassanfaragimportexport.com/", technologies: ['Laravel', 'MySQL'] },
    { id: 9, name: 'e-menu', image: 'images/66d9e0f4602e9_project_image_1719919820.png', url: 'https://uguest.net/', technologies: ['React', 'Laravel', 'MySQL'] },
    { id: 10, name: 'mjohar', image: 'images/66d9e113a47f7_project_image_1719917535.png', url: 'https://mjohar.net/', technologies: ['React', 'Laravel', 'MySQL'] },
    { id: 11, name: 'johar', image: 'images/66d9e12b74d76_project_image_1719917628.png', url: 'https://johar-dashboard.tek-part.com/', technologies: ['React', 'Laravel', 'MySQL'] },
    { id: 12, name: 'Alm', image: 'images/66d9e6e1b90bb_Your first design - Large rectangle - 336x280 (1).png', url: 'https://alam.foundation/', technologies: ['React', 'Laravel', 'MySQL'] },
    { id: 15, name: 'Number geniuses', image: 'images/Number geniuses.png', url: 'https://academy.softwareconnect.net/', technologies: ['React', 'Laravel', 'MySQL'] },
    { id: 14, name: 'online order', image: 'images/online-order.png', url: 'https://online-order.net/', technologies: ["Livewire", 'Laravel', 'MySQL'] },
    { id: 8, name: 'helnt', image: 'images/66d9e0bed94a1_project_image_1719919564.png', url: 'https://helnt.com/', technologies: ['React', 'Laravel', 'MySQL'] },
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = useMemo(() => projects.slice(startIndex, startIndex + projectsPerPage), [startIndex]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    const section = document.getElementById("projects-section");
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    
  };

  return (
    <Box id="projects-section" sx={{ py: { xs: 4, md: 8 } }}>
      <Helmet>
        <title>Portfolio | Belal Zeina</title>
      </Helmet>
      
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 2, fontWeight: 900, background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            PORTFOLIO
          </Typography>
          <Typography variant="h5" sx={{ textAlign: 'center', mb: 8, color: 'text.secondary', fontWeight: 500 }}>
            A selection of my recent full-stack applications and digital solutions.
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
                          background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
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
                            style={{background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)'}}
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
          <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', mt: 8 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size="large"
              sx={{
                '& .MuiPaginationItem-root': {
                  borderRadius: 2,
                  fontWeight: 700,
                  '&.Mui-selected': {
                    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                    color: 'white'
                  }
                }
              }}
            />
            <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
              Showing {startIndex + 1}-{Math.min(startIndex + projectsPerPage, projects.length)} of {projects.length} Projects
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
    // "belal"
  );
};

export default Projects;