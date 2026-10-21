
import { useEffect } from "react";
import { useRouter } from "next/router";

const GoogleTranslate = () => {
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;

    const loadTranslator = () => {
      if (cancelled) return;

      const wrapper = document.querySelector(".gtranslate_wrapper");

      if (!wrapper) return;

      // Configure the translator before loading its script.
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

      // Remove the previous widget and its script.
      wrapper.innerHTML = "";

      const oldScript = document.getElementById(
        "gtranslate-widget-script"
      );

      if (oldScript) oldScript.remove();

      // Load a fresh widget for the current page.
      const script = document.createElement("script");
      script.id = "gtranslate-widget-script";
      script.src =
        "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
      script.async = true;

      document.body.appendChild(script);
    };

    // Wait until the new page has rendered.
    const timer = setTimeout(loadTranslator, 100);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [router.asPath]);

  return (
    <div
      className="gtranslate_wrapper"
      aria-label="Choose website language"
    />
  );
};

export default GoogleTranslate;
