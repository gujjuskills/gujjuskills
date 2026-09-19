import Script from "next/script";

const GoogleAd = () => {
  return (
    <>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
        }}
        data-ad-client="ca-pub-8383584974642753"
        data-ad-slot="9550848037"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />

      <Script
        id="google-adsense"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8383584974642753"
        crossOrigin="anonymous"
        onLoad={() => {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (error) {
            console.error("AdSense error:", error);
          }
        }}
      />
    </>
  );
};

export default GoogleAd;
