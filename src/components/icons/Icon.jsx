// Icons.jsx
import React from "react";

export const StarIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
      fill={color}
    />
  </svg>
);

export const ChevronLeft = ({
  width = 16,
  height = 16,
  color = "currentColor",
}) => (
  <svg width={width} height={height} viewBox="0 0 10 17" fill="none">
    <path
      d="M8.333 16L1.186 8.854C1.093 8.76 1.04 8.632 1.04 8.5C1.04 8.367 1.093 8.24 1.186 8.146L8.333 1"
      stroke={color}
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronRight = ({
  width = 16,
  height = 16,
  color = "currentColor",
}) => (
  <svg width={width} height={height} viewBox="0 0 9 15" fill="none">
    <path
      d="M1.266 13.9L7.666 7.5"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
    />
    <path
      d="M7.667 7.5L1.267 1.1"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
    />
  </svg>
);

export const EmailIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
}) => (
  <svg width={width} height={height} viewBox="0 0 256 256" fill="none">
    <path
      d="M82.6 78.2H7.4C3.32 78.2 0 74.92 0 70.83V19.16c0-4.08 3.32-7.4 7.4-7.4h75.2c4.08 0 7.4 3.32 7.4 7.4v51.67c0 4.08-3.32 7.4-7.4 7.4zM7.4 13.76C4.42 13.76 2 16.18 2 19.16v51.67c0 2.98 2.42 5.4 5.4 5.4h75.2c2.98 0 5.4-2.42 5.4-5.4V19.16c0-2.98-2.42-5.4-5.4-5.4H7.4z"
      fill={color}
    />
    <path
      d="M45 53.78c-5.06 0-9.92-2.15-13.33-5.89L2.05 15.4l1.48-1.35L33.14 46.54C36.18 49.87 40.5 51.78 45 51.78s8.82-1.91 11.86-5.24l29.61-32.49 1.48 1.35L58.34 47.89C54.93 51.63 50.06 53.78 45 53.78z"
      fill={color}
    />
  </svg>
);
