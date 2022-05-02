import "../globals.css";
import type { AppProps } from "next/app";
import { applyPublicPageLayout } from "@src/layouts/PublicPageLayout";
import { AppPage } from "@src/types";

interface MyAppProps extends AppProps {
  Component: AppPage;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const applyLayout = Component.applyLayout || applyPublicPageLayout;

  return applyLayout(<Component {...pageProps} />);
}

export default MyApp;
