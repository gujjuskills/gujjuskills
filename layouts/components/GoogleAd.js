import Script from "next/script";

const GoogleAd = () => {
  return (
    <>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          minHeight: "250px",
        }}
        data-ad-client="ca-pub-8383584974642753"
        data-ad-slot="4191866766"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />

      <Script
        id="adsense-script"
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
