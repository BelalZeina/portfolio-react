import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // Install: `npm install react-helmet-async`
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import {  useContext } from 'react';

import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { ThemeContext } from '../App';



const Contact = () => {
  const { isDark } = useContext(ThemeContext);
  
  const contactMethods = [
    {
      icon: <FaFacebook size={32} />,
      title: 'Facebook',
      value: 'Belal Zeina',
      description: 'Follow me for updates and web development insights.',
      linkText: 'Visit Profile',
      link: 'https://www.facebook.com/people/Belal-Zeina/pfbid0Kv6C7yRLXzV9rSmF3unkGsN8c29HbjwmWQSD1fD8Y9jJLnYSwwXXW9XN1Wp6tVJEl/',
      color: '#1877F2'
    },
    {
      icon: <FaGithub size={32} />,
      title: 'GitHub',
      value: 'BelalZeina',
      description: 'Explore my open-source projects and code contributions.',
      linkText: 'View Repositories',
      link: 'https://github.com/BelalZeina',
      color: isDark ? '#fff' : '#24292e'
    },
    {
      icon: <FaLinkedin size={32} />,
      title: 'LinkedIn',
      value: 'Belal Zeina',
      description: "Let's connect professionally and share opportunities.",
      linkText: 'Connect Now',
      link: 'https://www.linkedin.com/in/belal-zeina-a53190220',
      color: '#0A66C2'
    },
    {
      icon: <FaWhatsapp size={32} />,
      title: 'WhatsApp',
      value: '+20 109 668 5149',
      description: 'Quick chat for project inquiries or collaborations.',
      linkText: 'Send Message',
      link: 'https://wa.me/+201096685149',
      color: '#25D366'
    },
    {
      icon: <FaPhone size={32} />,
      title: 'Phone',
      value: '+20 109 668 5149',
      description: 'Available for direct calls during business hours.',
      linkText: 'Call Me',
      link: 'tel:+201096685149',
      color: '#6366f1'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1, scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Helmet>
        <title>Contact | Belal Zeina</title>
      </Helmet>
      
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 2, fontWeight: 900, background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            GET IN TOUCH
          </Typography>
          <Typography variant="h5" sx={{ textAlign: 'center', mb: 8, color: 'text.secondary', fontWeight: 500 }}>
            Have a project in mind? Let's build something amazing together.
          </Typography>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Grid className="row" justifyContent="center">
              {contactMethods.map((method, idx) => (
                <Grid item className="col-md-6 col-lg-4 mt-3" key={idx}>
                  <motion.div variants={itemVariants} whileHover={{ y: -10 }}>
                    <Paper sx={{
                      p: 4,
                      height: '100%',
                      textAlign: 'center',
                      borderRadius: 6,
                      background: isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      '&:hover': {
                        borderColor: method.color,
                        boxShadow: `0 20px 40px -20px ${method.color}40`
                      }
                    }}>
                      <Box sx={{ 
                        mb: 3, color: method.color, 
                        p: 2, borderRadius: '50%', 
                        bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        {method.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{method.title}</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>{method.value}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, flexGrow: 1 }}>{method.description}</Typography>
                      <Button
                        href={method.link}
                        target="_blank"
                        variant="contained"
                        // fullWidth
                        sx={{
                          borderRadius: 3,
                          bgcolor: method.color,
                          '&:hover': { bgcolor: method.color, opacity: 0.9, transform: 'translateY(-2px)' }
                        }}
                      >
                        {method.linkText}
                      </Button>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;