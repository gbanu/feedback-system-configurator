import React from "react";
import ClipboardCopy from "../ClipboardCopy";
import Step from "../Step";

const ShareStep = ({ callbackFunction, shareLink }) => {
  return (
    <>
      <ClipboardCopy copyText={shareLink}></ClipboardCopy>
      <Step callbackFunction={callbackFunction} nextButtonTitle="Finish">
        Share the link above to start gathering feedback!
      </Step>
    </>
  );
};

export default ShareStep;
