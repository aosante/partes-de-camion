import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Github = ({ userName, isYellow }) => (
  <CircleIcon href={`https://github.com/${userName}`} isYellow={isYellow} iconName="GithubIcon" />
);

Github.propTypes = {
  userName: PropTypes.string.isRequired,
  isYellow: PropTypes.bool.isRequired,
};

export default Github;
