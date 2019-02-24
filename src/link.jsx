import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

import { useLocalesInfo } from "../utils/localesHelpers";

const Link = ({ to, locale, ...props }) => {
  const [fallbackLocale, defaultLocale] = useLocalesInfo();
  const currentLocale = locale || fallbackLocale;

  const path = currentLocale === defaultLocale ? to : `/${currentLocale}${to}`;

  return <GatsbyLink {...props} to={path} />;
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  locale: PropTypes.string
};

Link.defaultProps = {
  locale: ""
};

export default memo(Link);
