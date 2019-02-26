import React, { memo } from "react";
import PropTypes from "prop-types";

import { LocalesInfoContext } from "./locales-info";

const LocalesInfoProvider = ({ localesInfo, children }) => {
  return (
    <LocalesInfoContext.Provider value={localesInfo}>
      {children}
    </LocalesInfoContext.Provider>
  );
};

LocalesInfoProvider.PropTypes = {
  localesInfo: PropTypes.shape({
    currentLocale: PropTypes.string.isRequired,
    defaultLocale: PropTypes.string,
    locales: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  children: PropTypes.node.isRequired
};

export default memo(LocalesInfoProvider);
