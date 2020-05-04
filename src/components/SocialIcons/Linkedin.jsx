import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Linkedin = ({ userName, isYellow }) => (
  <CircleIcon
    href={`https://linkedin.com/in/${userName}`}
    isYellow={isYellow}
    iconName="LinkedinIcon"
  />
);

Linkedin.propTypes = {
  userName: PropTypes.string.isRequired,
  isYellow: PropTypes.bool.isRequired,
};

export default Linkedin;
