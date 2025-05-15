import { useState } from 'react';
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
  useTheme
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ mode, toggleMode }) => {
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
    <AppBar position="sticky" elevation={0} color="default" sx={{ 
      background: 'background.paper', 
      boxShadow: 'none', 
      borderBottom: (theme) => `1px solid ${theme.palette.divider}` 
    }}>
      <Toolbar>
        <Typography
          variant="h4"
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ flexGrow: 1, fontWeight: 800 }}
        >
          <RouterLink to="/" className='nav-link'>
          Belal Zeina
          </RouterLink>

        </Typography>

        {!isMobile && (
          <Box>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={RouterLink}
                to={item.path}
                color="inherit"
                sx={{ 
                  mx: 1, 
                  fontWeight: 500,
                  color: currentPath === item.path ? 'primary.main' : 'inherit',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        )}

        {isMobile && (
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
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
        >
          {navItems.map((item) => (
            <MenuItem
              key={`mobile-${item.name}`}
              component={RouterLink}
              to={item.path}
              onClick={handleMenuClose}
              sx={{
                color: currentPath === item.path ? 'primary.main' : 'text.primary',
                fontWeight: currentPath === item.path ? 600 : 400
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

export default Navbar; // Make sure this default export exists