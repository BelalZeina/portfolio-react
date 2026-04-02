import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async"; // Install: `npm install react-helmet-async`
import { Typography, useTheme ,Container, Grid, Box ,Paper} from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../App";
import {
  RiReactjsLine,
  RiCodeSSlashFill,
  RiLayoutLine,
  RiServerLine,
  RiDatabase2Line,
  RiCodeLine ,
  // RiApiLine,
} from "react-icons/ri";
const Services = () => {
  const { isDark } = useContext(ThemeContext);
  const theme = useTheme();
  
  const services = [
    {
      icon: <RiReactjsLine size={40} />,
      title: "Full-Stack Development",
      description: "Building seamless, high-performance applications bridging elegant frontends with robust backend architectures.",
      color: "#6366f1"
    },
    {
      icon: <RiLayoutLine size={40} />,
      title: "Responsive UI/UX",
      description: "Crafting modern, mobile-first interfaces that provide delightful experiences across all devices and screen sizes.",
      color: "#ec4899"
    },
    {
      icon: <RiServerLine size={40} />,
      title: "Backend Engineering",
      description: "Architecting scalable server-side solutions and efficient databases to power complex digital platforms.",
      color: "#8b5cf6"
    },
    {
      icon: <RiDatabase2Line size={40} />,
      title: "Database Management",
      description: "Expertly designing and optimizing MySQL and MongoDB structures for maximum data integrity and speed.",
      color: "#10b981"
    },
    {
      icon: <RiCodeLine size={40} />,
      title: "API Development",
      description: "Crafting secure, RESTful APIs and third-party integrations to connect your application with the digital ecosystem.",
      color: "#f59e0b"
    },
    {
      icon: <RiCodeSSlashFill size={40} />,
      title: "Project Management",
      description: "Leading technical projects from conception to deployment with a focus on quality, security, and timely delivery.",
      color: "#3b82f6"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Helmet>
        <title>Services | Belal Zeina</title>
      </Helmet>
      
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 900,
            }}
          >
            OFFERINGS
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              mb: 8,
              color: 'text.secondary',
              fontWeight: 500,
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            Crafting premium digital experiences through technical excellence and creative design.
          </Typography>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid className="row" >
              {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4 mt-3">
                  <motion.div variants={itemVariants} whileHover={{ y: -10 }}>

                   
                  <div
                    className="card h-100 border-0 shadow-lg p-4"
                    style={{
                      // background: isDark
                      //   ? "linear-gradient(145deg, #1e1e1e, #2d2d2d)"
                      //   : "linear-gradient(145deg, #ffffff, #f8f9fa)",
                      background: isDark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.6)',
                      borderRadius: "16px",
                      overflow: "hidden",
                      position: "relative",
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.05)"
                        : "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* Background gradient orb */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-20px",
                        right: "-20px",
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                        opacity: 0.07,
                        filter: "blur(15px)",
                      }}
                    />

                    {/* Icon Container */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "70px",
                        height: "70px",
                        borderRadius: "16px",
                        background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                        color: "white",
                        marginBottom: "1rem",
                        boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      {service.icon}
                    </div>

                    <h3
                      className={`h5 fw-bold mb-3 ${
                        isDark ? "text-white" : "text-dark"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mb-0 ${
                        isDark ? "text-white-50" : "text-muted"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;
