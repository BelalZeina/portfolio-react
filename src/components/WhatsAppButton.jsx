import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="position-fixed bottom-0 end-0 p-4"
      dir="ltr"
      style={{ zIndex: 1050 }}
    >
      <a
        href="https://wa.me/201096685149"
        target="_blank"
        rel="noopener noreferrer"
        className="d-block position-relative bg-success text-white p-3 rounded-circle shadow-lg"
        style={{
          transition: "transform 0.3s, box-shadow 0.3s",
          transform: hovered ? "scale(1.15)" : "scale(1)",
          boxShadow: hovered
            ? "0 8px 20px rgba(0, 0, 0, 0.3)"
            : "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FaWhatsapp size={32} />
        {/* Tooltip */}
        <div
          className="position-absolute bottom-100 end-0 mb-2 px-3 py-1 bg-dark text-white small rounded"
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
            whiteSpace: "nowrap",
          }}
        >
          Chat on WhatsApp
          <div
            className="position-absolute top-100 translate-middle-x"
            style={{
              width: 0,
              height: 0,
              right: "16%",
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "5px solid #212529",
            }}
          ></div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
