import "../styles/reset.css";
import type { AppProps } from "next/app";
import initMockAPI from "@mocks/index";

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === "development") {
    initMockAPI();
  }

  return <Component {...pageProps} />;
}
