import { useState, useMemo } from 'react';
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

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#4a90e2',
      light: '#7eb6ff',
      dark: '#0063b0',
    },
    secondary: {
      main: '#ff4081',
      light: '#ff79b0',
      dark: '#c60055',
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#f5f7fa',
      paper: mode === 'dark' ? '#1e1e1e' : '#fff',
    },
    text: {
      primary: mode === 'dark' ? '#fff' : '#222',
      secondary: mode === 'dark' ? 'rgba(255,255,255,0.7)' : '#555',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'light' : 'dark'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <meta name="google-site-verification" content="google392879ffc8d75b2e.html" />
        <meta name="keywords" content="Belal Zeina, Laravel Developer, Full Stack, Web Developer, PHP, React" />
        <meta name="author" content="Belal Ashraf Zeina" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Belal Zeina - Full Stack Web Developer" />
        <meta property="og:description" content="Portfolio of Belal Zeina, Laravel expert and full stack developer." />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Belal Zeina - Full Stack Web Developer" />
        <meta name="twitter:description" content="Portfolio of Belal Zeina, Laravel expert and full stack developer." />
        <meta name="twitter:image" content="/images/profile.jpg" />
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
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
  );
}

export default App;
