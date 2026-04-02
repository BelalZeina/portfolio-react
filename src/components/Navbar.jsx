import { useState, useContext, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  IconButton, 
  Menu, 
  MenuItem, 
  useMediaQuery,
  useTheme,
  Tooltip,
  Container
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../App';

const Navbar = () => {
  const { mode, toggleMode, isDark } = useContext(ThemeContext);
  const location = useLocation();
  const currentPath = location.pathname;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const open = Boolean(anchorEl);
const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []
  );
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]'); // أفضل من IDs ثابتة
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // -50% top & bottom للـ navbar fixed
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    setActiveSection(section.id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    handleMenuClose(); // يقفل المينيو في الموبايل
  };
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ 
      position: 'fixed', 
      top: isMobile ? 0 : 20, 
      left: 0, 
      right: 0, 
      zIndex: 1100, 
      display: 'flex', 
      justifyContent: 'center',
      px: isMobile ? 0 : 2,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          width: isMobile ? '100%' : (scrolled ? 'auto' : '100%'),
          maxWidth: isMobile ? '100%' : '1200px',
          borderRadius: isMobile ? 0 : (scrolled ? '100px' : '24px'),
          background: isDark ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(16px)',
          border: '1px solid',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ 
            justifyContent: 'space-between', 
            py: scrolled ? 0.5 : 1, 
            transition: 'padding 0.4s ease',
            minHeight: scrolled ? '64px' : '80px'
          }}>
            <Typography
              variant="h5"
              component={RouterLink}
              to="/"
              sx={{ 
                fontWeight: 800,
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
              }}
            >
              Belal Zeina
            </Typography>

            {!isMobile && (
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                background: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.03)',
                px: 2,
                py: 0.7,
                borderRadius: '100px',
              }}>
                {navItems.map((item) => (
                  <Box
                    key={item.name}
                    onClick={() => handleScrollTo(item.id)}
                    sx={{
                      cursor: 'pointer',
                      px: 2,
                      py: 0.8,
                      borderRadius: '100px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: activeSection === item.id ? '#fff' : 'text.secondary',
                      background:
                        activeSection === item.id
                          ? 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)'
                          : 'transparent',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: activeSection === item.id ? '#fff' : 'primary.main',
                      },
                    }}
                  >
                    {item.name}
                  </Box>
                ))}
              </Box>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Tooltip title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
                <IconButton
                  onClick={toggleMode}
                  sx={{
                    p: 1.2,
                    borderRadius: '12px',
                    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                    color: 'text.primary',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                      color: '#fff',
                      transform: 'rotate(12deg)',
                    }
                  }}
                >
                  {isDark ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
                </IconButton>
              </Tooltip>
              
              {isMobile && (
                <IconButton
                  edge="end"
                  onClick={handleMenuOpen}
                  sx={{
                    p: 1.2,
                    borderRadius: '12px',
                    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                    color: 'text.primary',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  borderRadius: 3,
                  minWidth: 220,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  background: isDark ? 'rgba(30, 41, 59, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
                }
              }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.name}
                  onClick={() => handleScrollTo(item.id)}
                  sx={{
                    py: 1.5,
                    px: 2,
                    mx: 1,
                    my: 0.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(236,72,153,0.1))',
                      transform: 'translateX(5px)',
                    }
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;