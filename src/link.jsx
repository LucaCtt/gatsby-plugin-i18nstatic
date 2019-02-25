import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

import { useLocalesInfo } from "./locales-info";

const Link = ({ to, locale, children, ...props }) => {
  const [fallbackLocale, defaultLocale] = useLocalesInfo();
  const currentLocale = locale || fallbackLocale;

  const path = currentLocale === defaultLocale ? to : `/${currentLocale}${to}`;

  return (
    <GatsbyLink {...props} to={path}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  locale: PropTypes.string,
  children: PropTypes.node.isRequired
};

Link.defaultProps = {
  locale: ""
};

export default memo(Link);
