import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const pageLink = ({ to, linkName }) => {
  return (
    <Link to={to} style={{ color: "inherit", textDecoration: "inherit" }}>
      {linkName}
    </Link>
  );
};

// NavbarLink.defautProps = {
//   to: "/",
//   linkName: "link",
// };

// NavbarLink.propTypes = {
//   to: PropTypes.string,
//   linkName: PropTypes.string,
// };

export default pageLink;
