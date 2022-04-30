import React from "react";

export const PublicPageLayout: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return <div>{children}</div>;
};
