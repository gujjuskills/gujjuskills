import SyntaxHighlighter from "react-syntax-highlighter";

const HighlightedCode = ({ children, language }) => {
  return (
    <SyntaxHighlighter
      language={language}
      customStyle={{
        background: "#ffffff",
        color: "#000000",
        padding: "16px",
        border: "1px solid #dddddd",
        borderRadius: "8px",
        fontSize: "14px",
      }}
      codeTagProps={{
        style: {
          color: "#000000",
          background: "transparent",
        },
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default HighlightedCode;
