import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Box, Typography, Button ,Container, Grid} from '@mui/material';
import { ThemeContext } from '../App';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Services from './Services';

const Home = () => {
  const { isDark } = useContext(ThemeContext);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Helmet>
        <title>Belal Zeina | Full Stack Web Developer</title>
        <meta name="description" content="Portfolio of Belal Zeina, a seasoned Full Stack Web Developer specializing in Laravel and modern web technologies." />
      </Helmet>

      {/* Hero Section */}
      <Box
        component="section"
        id="home"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          pt: { xs: 12, md: 0 },
          pb: { xs: 8, md: 0 },
          background: isDark 
            ? 'radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.05) 0%, transparent 40%)'
            : 'radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.03) 0%, transparent 40%)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Text Content */}
            <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 2,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'inline-block',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '40px',
                        height: '2px',
                        background: 'currentColor',
                        right: '-50px',
                        top: '50%',
                        display: { xs: 'none', sm: 'block' }
                      }
                    }}
                  >
                    Welcome to my world
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                      fontWeight: 900,
                      mb: 2,
                      background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Belal Zeina
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '1.5rem', sm: '2rem' },
                      fontWeight: 600,
                      color: 'text.secondary',
                      mb: 4,
                    }}
                  >
                    Full Stack Web Developer
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: 'text.secondary',
                      mb: 6,
                      maxWidth: '600px'
                    }}
                  >
                    I craft high-performance, beautiful, and secure web experiences. 
                    Specializing in Laravel and modern PHP development with a focus 
                    on building scalable digital solutions.
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      component="a"
                      href="/belal.pdf"
                      target="_blank"
                      variant="contained"
                      size="large"
                      sx={{
                        px: 4,
                        py: 2,
                        fontSize: '1rem',
                        borderRadius: '100px',
                        boxShadow: '0 10px 20px -5px rgba(99, 102, 241, 0.4)',
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
                        py: 2,
                        fontSize: '1rem',
                        borderRadius: '100px',
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                        }
                      }}
                    >
                      Contact Me
                    </Button>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '400px',
                    mx: 'auto',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '10%',
                      left: '10%',
                      width: '100%',
                      height: '100%',
                      border: '2px solid',
                      borderColor: 'primary.main',
                      borderRadius: '24px',
                      zIndex: -1,
                      transition: 'all 0.3s ease',
                    }
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 30px 60px -12px rgba(0,0,0,0.25)',
                      background: 'background.paper',
                      lineHeight: 0
                    }}
                  >
                    <img
                      src="images/profile-img-removebg-preview.png"
                      alt="Belal Zeina"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)'
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Other Sections */}
      <Box sx={{ position: 'relative', zIndex: 1, background: 'background.default' }}>
        <Box component="section" id="about" sx={{ py: 12 }}>
          <About />
        </Box>
        <Box component="section" id="services" sx={{ py: 12, background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)' }}>
          <Services />
        </Box>
        <Box component="section" id="projects" sx={{ py: 12 }}>
          <Projects />
        </Box>
        <Box component="section" id="contact" sx={{ py: 12, background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)' }}>
          <Contact />
        </Box>
      </Box>
    </Box>
  );
};

export default Home; 