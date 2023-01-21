import Button from "./Button";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const Header = ({ onAdd, showAdd }) => {
  const onClick = (e) => {
    console.log(e);
  };
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

export default Header;
