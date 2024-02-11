import { mount as MarketingMount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    MarketingMount(ref.current);
  });
  return <div ref={ref}></div>;
};
