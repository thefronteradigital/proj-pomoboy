import React from "react";

/**
 * Application header component
 */
export const Header: React.FC = () => {
  return (
    <div className="mb-8 text-center">
      <div
        className="text-5xl font-bold mb-2"
        style={{
          background:
            "linear-gradient(90deg, #0066FF 0%, #00CC00 25%, #FF0000 50%, #FFCC00 75%, #FF6600 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        POMOBOY
      </div>
      <a
        href="https://frontera.my.id"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors"
      >
        frontera<sup className="text-xs">®</sup>
      </a>
    </div>
  );
};
