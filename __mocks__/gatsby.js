import React from "react";

export const Link = ({ children, ...props }) => (
  <div data-testid="gatsby-link" {...props}>
    {children}
  </div>
);
