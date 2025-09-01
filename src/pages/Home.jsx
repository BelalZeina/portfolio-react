import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Box, Typography, Button} from '@mui/material';
import { ThemeContext } from '../App';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Services from './Services';

const Home = () => {
  const { isDark } = useContext(ThemeContext);
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      {/* linear-gradient(45deg, #64b5f6, #f48fb1) */}
      <section className="min-vh-100 d-flex align-items-center py-5"  style={{background: isDark ? 'linear-gradient(135deg, rgb(8 42 119) 0%, rgb(244, 143, 177) 100%)' : 'linear-gradient(135deg, #fafafa 0%, #e3f2fd 100%)'}}>
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
                    src="images/profile-img-removebg-preview.png"
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
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  Belal Ashraf Zeina
                </Typography>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 600,
                      mb: 4,
                      color: 'text.secondary',
                      textAlign: { xs: 'center', md: 'left' }
                    }}
                  >
                    Full Stack Web Developer
                  </Typography>
                </motion.div>
    
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.2rem',
                      lineHeight: 1.8,
                      mb: 5,
                      color: 'text.secondary',
                      textAlign: { xs: 'center', md: 'left' }
                    }}
                  >
                    A seasoned Full Stack Web Developer with a passion for continuous learning
                    and professional growth. Specializing in PHP and Laravel development.
                  </Typography>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  style={{
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    gap: '16px',
                    flexWrap: 'wrap'
                  }}
                >
                  <Button
                    component="a"
                    href="/belal.pdf"
                    target="_blank"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                      boxShadow: '0 8px 25px rgba(100, 181, 246, 0.3)',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        background: 'linear-gradient(45deg, #90caf9, #f8bbd9)',
                        boxShadow: '0 12px 35px rgba(100, 181, 246, 0.4)'
                      }
                    }}
                  >
                    View Resume
                  </Button>
                  
                  <Button
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      borderWidth: 2,
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
                    Contact Me
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <Box id="about" sx={{ py: 8 }}>
        <About />
      </Box>
      
      {/* Services Section */}
      <Box id="services" sx={{ py: 8 }}>
        <Services />
      </Box>
      
      {/* Projects Section */}
      <Box id="projects" sx={{ py: 8 }}>
        <Projects />
      </Box>
      
      {/* Contact Section */}
      <Box id="contact" sx={{ py: 8 }}>
        <Contact />
      </Box>

      <Helmet>
        <title>Belal Zeina | Web Developer</title>
        <meta name="description" content="Learn about Belal Zeina's web development skills." />
      </Helmet>
    </>
  );
};

export default Home; 