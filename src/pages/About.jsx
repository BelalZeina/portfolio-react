import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
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
  useTheme,
} from "@mui/material";
import { ThemeContext } from "../App";

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
  FaUsers,
} from "react-icons/fa";
import {
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiLivewire,
} from "react-icons/si";
import { SiFlask } from "react-icons/si";

import { GrProjects } from "react-icons/gr";

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
        "Reduced average page load times by 35% through database optimization techniques",
      ],
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
        "Developed comprehensive documentation",
      ],
    },
  ];

  const education = {
    title: "Education",
    position: "B.Sc. in Artificial Intelligence",
    institution:
      "Faculty of Artificial Intelligence At Kafr El-sheikh University",
    startDate: "2021-09-01",
    endDate: "2025-08-01",
    description: [
      "Machine Learning and Information Retrieval",
      "Robotics and Intelligent Machines",
      "Embedded Network Systems Technology",
      "Data Science",
    ],
  };

  const toolCategories = [
    { key: "all", label: "All" },
    { key: "backend", label: "Backend" },
    { key: "web", label: "Frontend" },
    { key: "database", label: "Database" },
    { key: "tools", label: "Tools" },
  ];

  const tools = [
    { name: "HTML/CSS", icon: <FaHtml5 size={28} />, category: "web", level: "Advanced", color: "#ff5722" },
    { name: "PHP", icon: <FaPhp size={28} />, category: "backend", level: "Advanced", color: "#777bb4" },
    { name: "Laravel", icon: <FaLaravel size={28} />, category: "backend", level: "Advanced", color: "#f55247" },
    { name: "Python", icon: <FaPython size={28} />, category: "backend", level: "Advanced", color: "#0769ad" },
    { name: "REST API", icon: <FaTerminal size={28} />, category: "backend", level: "Advanced", color: isDark ? "#fff" : "#222" },
    { name: "Node.js", icon: <FaNodeJs size={28} />, category: "backend", level: "Intermediate", color: "#8cc84b" },
    { name: "Flask", icon: <SiFlask size={28} />, category: "backend", level: "Intermediate", color: isDark ? "#fff" : "#000" },
    { name: "MySQL", icon: <FaDatabase size={28} />, category: "database", level: "Advanced", color: "#00758f" },
    { name: "MongoDB", icon: <FaDatabase size={28} />, category: "database", level: "Advanced", color: "#47a248" },
    { name: "jQuery", icon: <SiJquery size={28} />, category: "web", level: "Advanced", color: "#0769ad" },
    { name: "Livewire", icon: <SiLivewire size={28} />, category: "web", level: "Advanced", color: "#e83e8c" },
    { name: "React", icon: <FaReact size={28} />, category: "web", level: "Intermediate", color: "#61dafb" },
    { name: "Bootstrap", icon: <SiBootstrap size={28} />, category: "web", level: "Advanced", color: "#563d7c" },
    { name: "Tailwind", icon: <SiTailwindcss size={28} />, category: "web", level: "Intermediate", color: "#38bdf8" },
    { name: "Git", icon: <FaGitAlt size={28} />, category: "tools", level: "Advanced", color: "#f34f29" },
    { name: "SSH", icon: <FaTerminal size={28} />, category: "tools", level: "Advanced", color: isDark ? "#fff" : "#222" },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const filteredTools = selectedCategory === "all" ? tools : tools.filter(tool => tool.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Helmet>
          <title>About Belal Zeina | Full Stack Developer</title>
        </Helmet>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Header */}
          <motion.div variants={itemVariants}>
            <Typography variant="h2" sx={{ textAlign: "center", mb: 8, fontSize: { xs: '2.5rem', md: '3.5rem' }, background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              ABOUT ME
            </Typography>
          </motion.div>

          {/* Intro Section */}
          <Grid container spacing={4} sx={{ mb: 10 }}>
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Paper sx={{ p: 4, borderRadius: 6, height: '100%', background: isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h4" sx={{textAlign: "center", mb: 3, fontWeight: 700 }}>Personal Information</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Hello, I'm Belal Zeina — a dedicated Full Stack Web Developer with a strong passion for continuous learning and professional excellence.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                    I specialize in building responsive, user-centric interfaces and robust server-side solutions. My primary focus is on Laravel for back-end development, including building secure and scalable APIs.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    I thrive in collaborative environments and am always eager to tackle new challenges that push my technical boundaries.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
            <Grid item   sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1.5, mb: 6 }}>
              <motion.div variants={itemVariants}>
                <Grid className="row">
                  {[
                    { icon: <GrProjects size={32} />, count: "+20", label: "Projects", color: "#6366f1" },
                    { icon: <FaGithub size={32} />, count: "+75", label: "GitHub Repos", color: "#ec4899" },
                    { icon: <FaUsers size={32} />, count: "+25", label: "Happy Clients", color: "#8b5cf6" },
                    { icon: <FaBriefcase size={32} />, count: "3+", label: "Years Exp.", color: "#10b981" }
                  ].map((stat, i) => (
                    <Grid itemkey={i}   className="col-6 col-lg-3 mt-2">
                      <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 4, background: isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid', borderColor: 'divider', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-5px)', borderColor: stat.color } }}>
                        <Box sx={{ color: stat.color, mb: 1 }}>{stat.icon}</Box>
                        <Typography variant="h4" sx={{ fontWeight: 800 }}>{stat.count}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{stat.label}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>

          {/* Tools Grid */}
          <motion.div variants={itemVariants} sx={{ mb: 10 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>Tools & Expertise</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1.5, mb: 6 }}>
              {toolCategories.map((cat) => (
                <Chip
                  key={cat.key}
                  label={cat.label}
                  onClick={() => setSelectedCategory(cat.key)}
                  sx={{
                    px: 2, py: 2.5, borderRadius: 3, fontWeight: 600,
                    bgcolor: selectedCategory === cat.key ? 'primary.main' : 'background.paper',
                    color: selectedCategory === cat.key ? 'white' : 'text.secondary',
                    '&:hover': { bgcolor: selectedCategory === cat.key ? 'primary.dark' : 'action.hover' },
                    transition: 'all 0.2s ease'
                  }}
                />
              ))}
            </Box>
            <Grid container spacing={3} justifyContent="center" sx={{ mb: 10 }}>
              {filteredTools.map((tool, index) => (
                <Grid item xs={6} sm={4} md={2.4} lg={1.5} key={index}>
                  <motion.div whileHover={{ y: -8, scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <Paper sx={{ p: 2.5, textAlign: 'center', borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, background: isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid', borderColor: 'divider' }}>
                      <Box sx={{ color: tool.color }}>{tool.icon}</Box>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>{tool.name}</Typography>
                      <Typography variant="caption" sx={{ px: 1, py: 0.3, borderRadius: 1, bgcolor: tool.level === "Advanced" ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)', color: tool.level === "Advanced" ? '#10b981' : '#f59e0b', fontWeight: 800, fontSize: '0.65rem' }}>{tool.level}</Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Experience & Education */}
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 2 }}>
                <FaBriefcase color="#6366f1" /> Experience
              </Typography>
              {experiences.map((exp, i) => (
                <Paper key={i} sx={{ p: 4, mb: 3, borderRadius: 6, position: 'relative', overflow: 'hidden', background: isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h6" className="text-center" sx={{ fontWeight: 800, color: 'primary.main' }}>{exp.position}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 2 }}>{exp.institution} | {exp.startDate} - {exp.endDate}</Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {exp.description.map((item, j) => (
                      <Typography component="li" key={j} variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>{item}</Typography>
                    ))}
                  </Box>
                </Paper>
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 2 }}>
                <FaGraduationCap color="#ec4899" /> Education
              </Typography>
              <Paper sx={{ p: 4, borderRadius: 6, background: isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h6" className="text-center"  sx={{ fontWeight: 800, color: 'secondary.main' }}>{education.position}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 2 }}>{education.institution} | {education.startDate} - {education.endDate}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 2 }}>Grade : B+</Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {education.description.map((item, i) => (
                    <Typography component="li" key={i} variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>{item}</Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
