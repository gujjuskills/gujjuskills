  import config from "@config/config.json";
import theme from "@config/theme.json";
import { JsonContext } from "context/state";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import "styles/style.scss";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  // default theme setup
  const { default_theme } = config.settings;

    // google tag manager (gtm)
  const tagManagerArgs = {
    gtmId: config.params.tag_manager_id,
  };
  useEffect(() => {
    setTimeout(() => {
      process.env.NODE_ENV === "production" &&
        config.params.tag_manager_id &&
        TagManager.initialize(tagManagerArgs);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <JsonContext>
      <Head>
     {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8383584974642753"
          crossOrigin="anonymous"
        />

            
       </Head>
      <ThemeProvider attribute="class" defaultTheme={default_theme}>
        <Component {...pageProps} />
       </ThemeProvider>
    </JsonContext>
  );
};

export default App;
