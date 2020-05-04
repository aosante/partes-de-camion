import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Twitter = ({ userName, isYellow }) => (
  <CircleIcon href={`https://twitter.com/${userName}`} isYellow={isYellow} iconName="TwitterIcon" />
);

Twitter.propTypes = {
  userName: PropTypes.string.isRequired,
  isYellow: PropTypes.bool.isRequired,
};

export default Twitter;
