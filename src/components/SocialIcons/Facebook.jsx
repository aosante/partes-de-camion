import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Facebook = ({ userName, isYellow }) => (
  <CircleIcon
    href={`https://facebook.com/${userName}`}
    isYellow={isYellow}
    iconName="FacebookIcon"
  />
);

Facebook.propTypes = {
  userName: PropTypes.string.isRequired,
  isYellow: PropTypes.bool.isRequired,
};

export default Facebook;
