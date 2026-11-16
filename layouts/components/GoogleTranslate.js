import { useEffect } from "react";

// The header persists between Next.js client-side navigations. Load the
// translation widget once instead of destroying and downloading it per route.
const GoogleTranslate = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.gtranslateSettings = {
      default_language: "en",
      languages: [
        "en", "gu", "hi", "af", "sq", "am", "ar", "hy",
        "az", "eu", "be", "bn", "bs", "bg", "ca", "zh-CN",
        "zh-TW", "hr", "cs", "da", "nl", "et", "fi", "fr",
        "de", "el", "he", "hu", "is", "id", "ga", "it",
        "ja", "kn", "ko", "la", "lv", "lt", "mk", "ms",
        "ml", "mt", "mr", "ne", "no", "fa", "pl", "pt",
        "pa", "ro", "ru", "sr", "sk", "sl", "es", "sw",
        "sv", "tl", "ta", "te", "th", "tr", "uk", "ur",
        "uz", "vi", "cy", "zu"
      ],
      wrapper_selector: ".gtranslate_wrapper"
    };

    // Avoid duplicate downloads if React remounts the header.
    if (document.getElementById("gtranslate-widget-script")) return;

    const script = document.createElement("script");
    script.id = "gtranslate-widget-script";
    script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="gtranslate_wrapper" aria-label="Choose website language" />
  );
};

export default GoogleTranslate;
