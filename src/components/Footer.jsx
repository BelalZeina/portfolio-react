import React, { useContext } from 'react';
import { Box, Container, Typography, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { ThemeContext } from '../App';

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  const theme = useTheme();

  const socialLinks = [
    { icon: <FaGithub size={24} />, href: 'https://github.com/BelalZeina', label: 'GitHub' },
    { icon: <FaLinkedin size={24} />, href: 'https://linkedin.com/in/belal-zeina-a53190220/', label: 'LinkedIn' },
    { icon: <FaTwitter size={24} />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <FaEnvelope size={24} />, href: 'mailto:b.zeina357@gmail.com', label: 'Email' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 'auto',
        background: isDark ? 'background.paper' : 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative element */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(100, 181, 246, 0.3), transparent)',
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center' }}>
            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconButton
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      sx={{
                        color: 'text.secondary',
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          color: 'transparent',
                          background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          borderColor: '#f48fb1',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(100, 181, 246, 0.3)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>

            {/* Copyright */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 2,
                  fontSize: '0.9rem'
                }}
              >
                © {new Date().getFullYear()} Belal Zeina. All rights reserved.
              </Typography>
            </motion.div>

            {/* Made with love */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: '0.85rem',
                  opacity: 0.8
                }}
              >
                Made with ❤️ using React & Material-UI
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;