import { useEffect } from "react";

const GoogleAd = ({ slot = "7233385467" }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
        }}
        data-ad-client="ca-pub-8383584974642753"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default GoogleAd;
