import React from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";

import "./CircleIcon.scss";

const CircleIcon = ({ href, iconName, isYellow }) => (
  <a
    className={`circle-icon ${isYellow && "is-yellow"}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={iconName}
  >
    <Icon iconName={iconName} />
  </a>
);

CircleIcon.propTypes = {
  href: PropTypes.string,
  iconName: PropTypes.string,
  isYellow: PropTypes.bool.isRequired,
};

CircleIcon.defaultProps = {
  href: "",
  iconName: null,
};

export default CircleIcon;
