import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    privacyHref,
    privacyText,
    termsHref,
    termsText,
    social: { facebook, github, linkedin, medium, twitter },
  } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col lg={5} className="text-lg-left yellow-text">
            {copyright}
          </Col>
          <Col lg={3} className="my-3 my-lg-0">
            {twitter ? <SocialIcons.Twitter userName={twitter} isYellow={true} /> : null}
            {facebook ? <SocialIcons.Facebook userName={facebook} isYellow={true} /> : null}
            {linkedin ? <SocialIcons.Linkedin userName={linkedin} isYellow={true} /> : null}
            {github ? <SocialIcons.Github userName={github} isYellow={true} /> : null}
            {medium ? <SocialIcons.Medium userName={medium} isYellow={true} /> : null}
          </Col>
          <Col lg={4} className="text-lg-right">
            <a className="mr-3" href={privacyHref}>
              {privacyText}
            </a>
            <a href={termsHref}>{termsText}</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
