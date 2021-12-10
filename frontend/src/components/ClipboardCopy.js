import React, { useEffect, useState } from "react";

const ClipboardCopy = ({ copyText }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    return () => {};
  }, [isCopied]);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ margin: "10px auto", width: "max-content" }}>
      <input type="text" value={copyText} readOnly style={{ width: "300px" }} />
      {/* Bind our handler function to the onClick button property */}
      <button onClick={handleCopyClick}>
        <span>{isCopied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  );
};

export default ClipboardCopy;
