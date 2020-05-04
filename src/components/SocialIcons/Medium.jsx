import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Medium = ({ userName, isYellow }) => (
  <CircleIcon href={`https://medium.com/@${userName}`} isYellow={isYellow} iconName="MediumIcon" />
);

Medium.propTypes = {
  userName: PropTypes.string.isRequired,
  isYellow: PropTypes.bool.isRequired,
};

export default Medium;
