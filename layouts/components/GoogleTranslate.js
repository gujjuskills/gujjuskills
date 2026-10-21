
import { useCallback, useEffect } from "react";
import Script from "next/script";

const GoogleTranslate = () => {
  const initializeTranslate = useCallback(() => {
    const googleTranslate = window.google?.translate?.TranslateElement;
    const container = document.getElementById(
      "google_translate_element"
    );

    if (!googleTranslate || !container) return;

    if (container.dataset.initialized === "true") return;

    container.innerHTML = "";

    new googleTranslate(
      {
        pageLanguage: "en",
        includedLanguages: "en,gu,hi",
        layout:
          googleTranslate.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      "google_translate_element"
    );

    container.dataset.initialized = "true";
  }, []);

  useEffect(() => {
    if (window.google?.translate?.TranslateElement) {
      initializeTranslate();
      return;
    }

    const timer = window.setInterval(() => {
      if (window.google?.translate?.TranslateElement) {
        window.clearInterval(timer);
        initializeTranslate();
      }
    }, 300);

    return () => window.clearInterval(timer);
  }, [initializeTranslate]);

  return (
    <>
      <div
        id="google_translate_element"
        className="google-translate-container"
      />

      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js"
        strategy="afterInteractive"
        onReady={initializeTranslate}
      />
    </>
  );
};

export default GoogleTranslate;
