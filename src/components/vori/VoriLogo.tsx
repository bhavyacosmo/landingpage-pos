import React from "react";

interface VoriLogoProps {
  theme?: "dark" | "light";
  size?: "nav" | "footer";
}

export const VoriLogo: React.FC<VoriLogoProps> = ({
  theme = "light",
  size = "nav",
}) => {
  const isDarkSurface = theme === "dark";
  const boxSize =
    size === "footer"
      ? "w-9 h-9 rounded-[9px]"
      : "w-7 h-7 rounded-[7px]";
  const textSize =
    size === "footer"
      ? "text-[25px] tracking-[-0.03em]"
      : "text-[20px] tracking-[-0.03em]";

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <span
        className={`${boxSize} flex items-center justify-center shrink-0 transition-colors duration-200 ${
          isDarkSurface ? "bg-white text-[#0f0f0f]" : "bg-[#0f0f0f] text-white"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={size === "footer" ? "w-5 h-5" : "w-4 h-4"}
          aria-hidden="true"
        >
          <path
            d="M6.2 18.2V5.8h5.7c3.15 0 5.3 1.85 5.3 4.65 0 2.82-2.15 4.68-5.3 4.68H9.6v3.07H6.2Zm3.4-5.9h2.05c1.38 0 2.2-.74 2.2-1.85 0-1.1-.82-1.82-2.2-1.82H9.6v3.67Z"
            fill="currentColor"
          />
          <circle cx="16.9" cy="16.7" r="2.1" fill="#10b981" />
        </svg>
      </span>
      <span
        className={`font-sans font-extrabold leading-none transition-colors duration-200 ${textSize} ${
          isDarkSurface ? "text-white" : "text-[#0f0f0f]"
        }`}
      >
        Produce <span className="text-[#10b981]">Ai</span>
      </span>
    </span>
  );
};
