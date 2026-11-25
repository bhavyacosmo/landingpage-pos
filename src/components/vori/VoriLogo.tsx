import React from "react";

interface VoriLogoProps {
  theme?: "dark" | "light";
  size?: "nav" | "footer";
}

/** Official Produce Ai wordmark. theme="dark" = placed on a dark surface. */
export const VoriLogo: React.FC<VoriLogoProps> = ({
  theme = "light",
  size = "nav",
}) => (
  <img
    src={`/images/brand/${theme === "dark" ? "logo-on-dark" : "logo-on-light"}.svg`}
    alt="Produce Ai"
    className={`block w-auto select-none ${size === "footer" ? "h-8" : "h-[30px]"}`}
    draggable={false}
  />
);
