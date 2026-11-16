import config from "@config/config.json";
import { JsonContext } from "context/state";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import "styles/style.scss";

const App = ({ Component, pageProps }) => {
  const { default_theme } = config.settings;

  // Keep analytics off the critical rendering path.
  const tagManagerArgs = { gtmId: config.params.tag_manager_id };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (process.env.NODE_ENV === "production" && config.params.tag_manager_id) {
        TagManager.initialize(tagManagerArgs);
      }
    }, 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <JsonContext>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </Head>
      <Script
        id="google-adsense"
        strategy="afterInteractive"
        async
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8383584974642753"
      />
      <ThemeProvider attribute="class" defaultTheme={default_theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </JsonContext>
  );
};

export default App;
