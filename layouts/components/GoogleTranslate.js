
import { useEffect } from "react";
import Script from "next/script";

const GoogleTranslate = () => {
  useEffect(() => {
    const initialize = () => {
      const TranslateElement =
        window.google?.translate?.TranslateElement;

      const container = document.getElementById(
        "google_translate_element"
      );

      if (!TranslateElement || !container) return;
      if (container.dataset.initialized === "true") return;

      container.innerHTML = "";

      new TranslateElement(
        {
          pageLanguage: "en",
          layout:
            TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );

      container.dataset.initialized = "true";
    };

    window.googleTranslateElementInit = initialize;

    if (window.google?.translate?.TranslateElement) {
      initialize();
    }

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <>
      <div
        id="google_translate_element"
        className="google-translate-container"
      />

      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
};

export default GoogleTranslate;
