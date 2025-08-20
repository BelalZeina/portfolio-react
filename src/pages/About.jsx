import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; 
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Paper,
  Chip,
  Avatar,
  useTheme
} from '@mui/material';
import { ThemeContext } from '../App';

import { 
  FaBriefcase, 
  FaGraduationCap,
  FaHtml5,
  FaPython,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaDatabase,
  FaTerminal,
  FaGitAlt,
  FaUsers
} from 'react-icons/fa';
import { 
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiLivewire,
} from 'react-icons/si';
import { SiFlask } from "react-icons/si";

import { GrProjects } from 'react-icons/gr';

const About = () => {
  const { isDark } = useContext(ThemeContext);
  const theme = useTheme();

  const experiences = [
    {
      title: "WORK EXPERIENCE",
      institution: "Freelance",
      position: "Freelance Web Developer",
      startDate: "2023",
      endDate: "Present",
      description: [
        "Developed custom backend solutions for 15+ clients using Laravel and modern PHP practices",
        "Integrated AI/ML models with web applications for enhanced functionality",
        "Reduced average page load times by 35% through database optimization techniques"
      ]
    },
    {
      title: "WORK EXPERIENCE",
      institution: "Tek-Part company",
      position: "Backend Developer",
      startDate: "2023-01-12",
      endDate: "2024-01-9",
      description: [
        "Developed and maintained backend systems using PHP and the Laravel framework",
        "Designed and optimized MySQL databases",
        "Implemented RESTful APIs",
        "Collaborated with frontend developers",
        "Conducted code reviews",
        "Participated in Agile development methodologies",
        "Developed comprehensive documentation"
      ]
    }
  ];

  const education = {
    title: "Education",
    position: "BACHELOR OF Artificial Intelligence",
    institution: "Faculty of Artificial Intelligence At Kafr El-sheikh University",
    startDate: "2021-09-01",
    endDate: "2025-08-01",
    description: [
      "Machine Learning and Information Retrieval",
      "Robotics and Intelligent Machines",
      "Embedded Network Systems Technology",
      "Data Science"
    ]
  };

  // Tool categories and tools with skill levels
  const toolCategories = [
    { key: 'all', label: 'All' },
    { key: 'backend', label: 'Backend' },
    { key: 'web', label: 'Frontend' },
    { key: 'database', label: 'Database' },
    // { key: 'devops', label: 'Cloud & DevOps' },
    { key: 'tools', label: 'Tools' },
  ];

  const tools = [
    { name: 'HTML/CSS', icon: <FaHtml5 size={32} />, category: 'web', level: 'Advanced', color: '#ff5722' },
    { name: 'PHP', icon: <FaPhp size={32} />, category: 'backend', level: 'Advanced', color: '#777bb4' },
    { name: 'Laravel', icon: <FaLaravel size={32} />, category: 'backend', level: 'Advanced', color: '#f55247' },
    { name: 'Python', icon: <FaPython size={32} />, category: 'backend', level: 'Advanced', color: '#0769ad' },
    { name: 'REST API', icon: <FaTerminal size={32} />, category: 'backend', level: 'Advanced', color: isDark?'#fff':'#222' },
    { name: 'Node.js', icon: <FaNodeJs size={32} />, category: 'backend', level: 'Intermediate', color: '#8cc84b' },
    { name: 'Flask', icon: <SiFlask size={32} />, category: 'backend', level: 'Intermediate', color: isDark?'#fff':'#000' },
    { name: 'MySQL', icon: <FaDatabase size={32} />, category: 'database', level: 'Advanced', color: '#00758f' },
    { name: 'MongoDB', icon: <FaDatabase size={32} />, category: 'database', level: 'Advanced', color: '#47a248' },
    { name: 'jQuery', icon: <SiJquery size={32} />, category: 'web', level: 'Advanced', color: '#0769ad' },
    { name: 'Livewire', icon: <SiLivewire size={32} />, category: 'web', level: 'Advanced', color: '#e83e8c' },
    { name: 'React', icon: <FaReact  size={32} />, category: 'web', level: 'Intermediate', color: '#61dafb' },
    { name: 'Bootstrap', icon: <SiBootstrap size={32} />, category: 'web', level: 'Advanced', color: '#563d7c' },
    { name: 'Tailwind', icon: <SiTailwindcss size={32} />, category: 'web', level: 'Intermediate', color: '#38bdf8' },
    { name: 'Git', icon: <FaGitAlt size={32} />, category: 'tools', level: 'Advanced', color: '#f34f29' },
    { name: 'SSH', icon: <FaTerminal size={32} />, category: 'tools', level: 'Advanced', color: isDark?'#fff':'#222' },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const filteredTools = selectedCategory === 'all' ? tools : tools.filter(tool => tool.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box sx={{ 
      py: 8,
      background: isDark ? 'background.default' : 'background.default'
    }}>
      <Container maxWidth="lg">
        <Helmet>
          <title>About Belal Zeina | Web Developer</title>
          <meta name="description" content="Learn about Belal Zeina's web development skills." />
        </Helmet>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 6,
                fontWeight: 800,
                background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              ABOUT ME
            </Typography>
          </motion.div>

          {/* Personal Information */}
          <motion.div variants={itemVariants}>
            <Paper
              elevation={isDark ? 0 : 2}
              sx={{
                p: 4,
                mb: 6,
                borderRadius: 3,
                background: isDark ? 'background.paper' : 'background.paper',
                border: isDark ? '1px solid' : 'none',
                borderColor: 'divider'
              }}
            >
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Personal Information
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Hello, I'm Belal Zeina — a dedicated Full Stack Web Developer with a strong passion for continuous learning and professional excellence.              
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                I bring extensive experience in both front-end and back-end development, with a particular focus on building responsive, user-centric interfaces and robust server-side solutions.              
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                I specialize in developing modern front-end experiences, and I'm highly proficient in Laravel for back-end development, including building secure and scalable APIs. I thrive in collaborative environments, use GitHub for version control, and am always eager to tackle new challenges.
              </Typography>
              
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Take a look at my projects to see the quality and versatility of my work.
              </Typography>

              {/* Stats Section */}
              <Grid container justifyContent="center" spacing={3} sx={{ mt: 4 }}>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 2,
                        background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                        color: 'white'
                      }}
                    >
                      <GrProjects size={40} />
                    </Avatar>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                      +20
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Projects
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={12} sm={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 2,
                        background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                        color: 'white'
                      }}
                    >
                      <FaGithub size={40} />
                    </Avatar>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                      +75
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      GitHub Repos
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={12} sm={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 2,
                        background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                        color: 'white'
                      }}
                    >
                      <FaUsers size={40} />
                    </Avatar>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                      +25
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Clients
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>

          {/* Tools Experts Section */}
          <motion.div variants={itemVariants}>
            <Paper
              elevation={isDark ? 0 : 2}
              sx={{
                p: 4,
                mb: 6,
                borderRadius: 3,
                background: isDark ? 'background.paper' : 'background.paper',
                border: isDark ? '1px solid' : 'none',
                borderColor: 'divider'
              }}
            >
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                TOOLS EXPERTS
              </Typography>
              {/* Category Filter Buttons */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
                {toolCategories.map(cat => (
                  <Chip
                    key={cat.key}
                    label={cat.label}
                    color={selectedCategory === cat.key ? 'primary' : 'default'}
                    onClick={() => setSelectedCategory(cat.key)}
                    sx={{
                      fontWeight: 600,
                      fontSize: '1rem',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      boxShadow: selectedCategory === cat.key ? 2 : 0,
                      cursor: 'pointer',
                      background: selectedCategory === cat.key ? 'linear-gradient(45deg, #64b5f6, #f48fb1)' : undefined,
                      color: selectedCategory === cat.key ? 'white' : undefined
                    }}
                  />
                ))}
              </Box>
              {/* Tools Grid */}
              <Grid container spacing={2}>
                {filteredTools.map((tool, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
                    <motion.div
                      variants={cardVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      style={{ width: '100%' }}
                    >
                      <Card
                        sx={{
                          p: 2,
                          width: '100%',
                          height: '100%',
                          textAlign: 'center',
                          // background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                          border: '1px solid',
                          borderColor: 'divider',
                          boxShadow: theme.shadows[1],
                          '&:hover': {
                            boxShadow: theme.shadows[8],
                            transform: 'translateY(-4px)'
                          },
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: 140
                        }}
                      >
                        <Box sx={{ mb: 1, color: tool.color }}>{tool.icon}</Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                          {tool.name}
                        </Typography>
                        <Chip
                          label={tool.level}
                          size="small"
                          sx={{
                            background: tool.level === 'Advanced' ? '#e0f7fa' : '#fffde7',
                            color: tool.level === 'Advanced' ? '#00796b' : '#fbc02d',
                            fontWeight: 700
                          }}
                        />
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>

          {/* Work Experience */}
          <motion.div variants={itemVariants}>
            <Paper
              elevation={isDark ? 0 : 2}
              sx={{
                p: 4,
                mb: 6,
                borderRadius: 3,
                background: isDark ? 'background.paper' : 'background.paper',
                border: isDark ? '1px solid' : 'none',
                borderColor: 'divider'
              }}
            >
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 2 }}>
                <FaBriefcase style={{ 
                  background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }} />
                Work Experience
              </Typography>
              
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    sx={{
                      mb: 3,
                      background: isDark ? 'background.card' : 'background.card',
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        boxShadow: theme.shadows[8],
                        transform: 'translateY(-2px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {experience.position}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {experience.institution} | {experience.startDate} - {experience.endDate}
                      </Typography>
                      <Box component="ul" sx={{ pl: 0, m: 0 }}>
                        {experience.description.map((item, itemIndex) => (
                          <Box
                            component="li"
                            key={itemIndex}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              mb: 1,
                              listStyle: 'none',
                              '&::before': {
                                content: '""',
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                                mr: 2,
                                mt: 0.7,
                                flexShrink: 0
                              }
                            }}
                          >
                            <Typography variant="body2">
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Paper>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <Paper
              elevation={isDark ? 0 : 2}
              sx={{
                p: 4,
                borderRadius: 3,
                background: isDark ? 'background.paper' : 'background.paper',
                border: isDark ? '1px solid' : 'none',
                borderColor: 'divider'
              }}
            >
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 2 }}>
                <FaGraduationCap style={{ 
                  background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }} />
                Education
              </Typography>
              
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  sx={{
                    background: isDark ? 'background.card' : 'background.card',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      boxShadow: theme.shadows[8],
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {education.position}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {education.institution} | {education.startDate} - {education.endDate}
                    </Typography>
                    <Box component="ul" sx={{ pl: 0, m: 0 }}>
                      {education.description.map((item, index) => (
                        <Box
                          component="li"
                          key={index}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            mb: 1,
                            listStyle: 'none',
                            '&::before': {
                              content: '""',
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                              mr: 2,
                              mt: 0.7,
                              flexShrink: 0
                            }
                          }}
                        >
                          <Typography variant="body2">
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;