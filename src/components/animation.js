import dynamic from "next/dynamic";
import React from "react";

// lottie-web reads browser globals at module initialization, so keep it out of
// Next.js server rendering and load it only in the browser.
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '95%',
    }
  };


  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;
