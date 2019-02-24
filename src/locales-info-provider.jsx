import React, { memo } from "react";

import { LocalesInfoContext } from "./locales-info";

const LocalesInfoProvider = ({ localesInfo, children }) => {
  return (
    <LocalesInfoContext.Provider value={localesInfo}>
      {children}
    </LocalesInfoContext.Provider>
  );
};

export default memo(LocalesInfoProvider);
