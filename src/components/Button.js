import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onCLick: PropTypes.func.isRequired,
};

export default Button;
