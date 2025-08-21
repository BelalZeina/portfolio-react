import { useState, useContext } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Menu, 
  MenuItem, 
  useMediaQuery,
  useTheme,
  Tooltip
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  const open = Boolean(anchorEl);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      color="default" 
      className={isDark ? 'dark' : ''}
      sx={{ 
        background: 'background.paper', 
        boxShadow: 'none', 
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backdropFilter: 'blur(20px)',
        transition: 'all 0.3s ease'
      }}
    >
      <Toolbar>
        <Typography
          variant="h4"
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ 
            flexGrow: 1, 
            marginLeft: "1rem",
            fontWeight: 800,
            '& a': {
              background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }
            }
          }}
        >
          <RouterLink to="/">
            Belal Zeina
          </RouterLink>
        </Typography>

        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <RouterLink
                key={item.name}
                to={item.path}
                style={{
                  textDecoration: 'none',
                  margin: '0 8px',
                  fontWeight: 500,
                  color: currentPath === item.path ? theme.palette.primary.main : theme.palette.text.primary,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundImage = 'linear-gradient(45deg, #64b5f6, #f48fb1)';
                  e.target.style.backgroundClip = 'text';
                  e.target.style.webkitBackgroundClip = 'text';
                  e.target.style.webkitTextFillColor = 'transparent';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundImage = 'none';
                  e.target.style.webkitTextFillColor = 'initial';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {item.name}
              </RouterLink>
            ))}
            
            <Tooltip title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
              <IconButton
                onClick={toggleMode}
                color="inherit"
                sx={{
                  ml: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(180deg)',
                    background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }
                }}
              >
                {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
          </Box>
        )}

        {isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
              <IconButton
                onClick={toggleMode}
                color="inherit"
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(180deg)',
                    background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }
                }}
              >
                {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
            
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}

        <Menu
          id="mobile-menu"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              mt: 1,
              minWidth: 200,
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              border: '1px solid',
              borderColor: 'divider',
            }
          }}
        >
          {navItems.map((item) => (
            <MenuItem
              key={`mobile-${item.name}`}
              component={RouterLink}
              to={item.path}
              onClick={handleMenuClose}
              sx={{
                color: currentPath === item.path ? 'primary.main' : 'text.primary',
                fontWeight: currentPath === item.path ? 600 : 400,
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: 'action.hover',
                  background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }
              }}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;