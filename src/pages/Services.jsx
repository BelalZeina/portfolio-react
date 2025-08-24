import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async"; // Install: `npm install react-helmet-async`
import { Typography, useTheme } from "@mui/material";
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
      icon: <RiReactjsLine size={48} />,
      title: "Full-Stack Wizardry",
      description:
        "Seamlessly bridge the gap between frontend elegance and backend robustness.",
    },
    {
      icon: <RiLayoutLine size={48} />,
      title: "Responsive Design Mastery",
      description:
        "Delight your users with websites that adapt flawlessly to any device.",
    },
    {
      icon: <RiServerLine size={48} />,
      title: "Backend Architectural Prowess",
      description:
        "Power up your applications with a strong and efficient backend architecture.",
    },
    {
      icon: <RiDatabase2Line size={48} />,
      title: "Data Dynamo",
      description: "Efficiently manage and organize your data.",
    },
    {
      // icon: <FaApi size={48} />,
      icon: <RiCodeLine  size={48} />,
      title: "API Alchemy",
      description: "Craft robust APIs to connect and communicate.",
    },
    {
      icon: <RiCodeSSlashFill size={48} />,
      title: "End-to-End Project Expertise",
      description: "Beyond coding, I bring project management skills.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-5">
      <Helmet>
        <title>Belal Zeina | Services</title>
        <meta
          name="description"
          content="Professional web development services by Belal Zeina."
        />
      </Helmet>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: 800,
              background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              letterSpacing: "-0.5px",
            }}
          >
            OFFERINGS TO MY CLIENTS
          </Typography>
          <p className="text-center mb-5 lead">
            Crafting Web Experiences! From sleek designs to dynamic apps...
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="row g-4"
          >
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <motion.div
                  variants={itemVariants}
                  whileHover="hover"
                  className="h-100"
                >
                  <div
                    className="card h-100 border-0 shadow-lg p-4"
                    style={{
                      background: isDark
                        ? "linear-gradient(145deg, #1e1e1e, #2d2d2d)"
                        : "linear-gradient(145deg, #ffffff, #f8f9fa)",
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
                        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
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
                        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
