import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (
        window.google &&
        window.google.translate &&
        document.getElementById("google_translate_element")
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,gu,hi,es,fr,de,it,pt,ru,ja,ko,zh-CN,zh-TW,ar,bn,pa,mr,ta,te,kn,ml,ur,fa,tr,vi,th,id,ms,nl,pl,uk,ro,cs,sv,da,no,fi,el,he,hu,sk,bg,sr,hr,sl,sw,am,af,ca,et,lv,lt,ne,si,km,lo,my,fil",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");

      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="google-translate"
      title="Translate this page"
    />
  );
};

export default GoogleTranslate;
