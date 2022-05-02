import React, { useEffect, useState } from "react";

import { PublicPageLayout } from "./PublicPageLayout";
import { Preloader } from "@src/components/progress/Preloader";

export const PrivatePageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Preloader />;

  return <PublicPageLayout>{children}</PublicPageLayout>;
};

export function applyPrivatePageLayout(page: React.ReactNode) {
  return <PrivatePageLayout>{page}</PrivatePageLayout>;
}
