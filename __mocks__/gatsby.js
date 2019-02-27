import React from "react";

export const Link = ({ to, children, ...props }) => (
  <div data-testid="gatsby-link" href={to} {...props}>
    {children}
  </div>
);
