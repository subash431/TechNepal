// Input.js
import "./Input.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Assuming you're using Font Awesome icons

const Input = ({ type, placeholder, icon }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <input
          type={type || "text"}
          placeholder={placeholder || ""}
          value={value}
          onChange={handleChange}
          style={{ paddingRight: icon ? "150px" : "10px" }} // Adjust paddingRight to accommodate the icon
        />
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            style={{
              position: "absolute",
              right: "1190px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
