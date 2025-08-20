import { useState, useMemo, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ScrollToTop from './pages/ScrollToTop';

// Create theme context
export const ThemeContext = createContext();

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#64b5f6',
      light: '#90caf9',
      dark: '#1976d2',
      gradient: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
      gradientLight: 'linear-gradient(45deg, #90caf9, #f8bbd9)',
      gradientDark: 'linear-gradient(45deg, #1976d2, #c2185b)',
    },
    secondary: {
      main: '#f48fb1',
      light: '#f8bbd9',
      dark: '#c2185b',
      gradient: 'linear-gradient(45deg, #f48fb1, #64b5f6)',
    },
    background: {
      default: mode === 'dark' ? '#0a0a0a' : '#fafafa',
      paper: mode === 'dark' ? '#1a1a1a' : '#ffffff',
      card: mode === 'dark' ? '#1e1e1e' : '#ffffff',
      section: mode === 'dark' ? '#2a2a2a' : '#f5f5f5',
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#1a1a1a',
      secondary: mode === 'dark' ? 'rgba(255,255,255,0.7)' : '#666666',
      muted: mode === 'dark' ? 'rgba(255,255,255,0.5)' : '#999999',
    },
    divider: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    border: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          fontSize: '0.95rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
          color: 'white',
          boxShadow: '0 4px 14px rgba(100, 181, 246, 0.3)',
          '&:hover': {
            background: 'linear-gradient(45deg, #90caf9, #f8bbd9)',
            boxShadow: '0 8px 25px rgba(100, 181, 246, 0.4)',
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: '#64b5f6',
          color: '#64b5f6',
          '&:hover': {
            borderWidth: 2,
            background: 'linear-gradient(45deg, rgba(100, 181, 246, 0.1), rgba(244, 143, 177, 0.1))',
            borderColor: '#f48fb1',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(100, 181, 246, 0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255,255,255,0.8)',
          '&.dark': {
            backgroundColor: 'rgba(26,26,26,0.8)',
          },
        },
      },
    },
  },
});

function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('theme-mode');
    return savedMode || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  
  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme-mode', newMode);
  };

  const themeContextValue = {
    mode,
    toggleMode,
    isDark: mode === 'dark'
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <meta name="google-site-verification" content="google392879ffc8d75b2e.html" />
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
