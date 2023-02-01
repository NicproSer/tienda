import React, { useState } from "react";
import "./ScrollButton.css";

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toogleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled < 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toogleVisible);

  return (
    <button
      id="button-top"
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <i className="bx bx-chevron-up"></i>
    </button>
  );
};
