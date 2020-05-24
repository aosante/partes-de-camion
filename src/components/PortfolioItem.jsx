import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import { Col } from "react-bootstrap";
import Image from "components/Image";
import PortfolioDetailDialog from "components/PortfolioDetailDialog";

import "./PortfolioItem.scss";

const PortfolioItem = ({
  imageFileName,
  imageAlt,
  header,
  content,
  imageFileNameDetail,
  imageAltDetail,
  extraInfo,
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const handleShowDetail = useCallback(() => {
    setShowDetail(true);
  }, []);
  const handleHideDetail = useCallback(() => {
    setShowDetail(false);
  }, []);

  return (
    <>
      <Col md={4} sm={6} className="portfolio-item">
        <a
          role="button"
          tabIndex={-1}
          className="portfolio-link"
          data-toggle="modal"
          onClick={handleShowDetail}
        >
          <Image className="img-fluid" fileName={imageFileName} alt={imageAlt || header} />
          <div className="portfolio-hover" />
        </a>
        <div className="portfolio-caption">
          <h4>{header}</h4>
        </div>
      </Col>
      <PortfolioDetailDialog
        show={showDetail}
        onHide={handleHideDetail}
        imageFileName={imageFileNameDetail || imageFileName}
        imageAlt={imageAltDetail || imageAlt}
        header={header}
        content={content}
        extraInfo={extraInfo}
      />
    </>
  );
};

PortfolioItem.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string.isRequired,
  content: PropTypes.string,
  imageFileNameDetail: PropTypes.string,
  imageAltDetail: PropTypes.string,
  extraInfo: PropTypes.any,
};

PortfolioItem.defaultProps = {
  imageAlt: "",
  content: "",
  imageFileNameDetail: "",
  imageAltDetail: "",
  extraInfo: null,
};

export default PortfolioItem;
