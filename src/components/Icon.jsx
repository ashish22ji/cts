// Icons.jsx
import React from "react";

export const StarIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
  >
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
  className,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 10 17"
    fill="none"
  >
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
  className,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 9 15"
    fill="none"
  >
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
  className,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 256 256"
    fill="none"
  >
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

//Social Icons
export const FacebookIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  className,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z" />
  </svg>
);

export const InstagramIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  className,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
  </svg>
);

export const LinkedInIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  className,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm1 5H3v14h2V8zm7 0h-2v14h2v-7c0-1.9 1.3-3 3-3 1.6 0 2.7 1 2.7 3v7h2V12c0-3.6-1.9-5-4.6-5-2.2 0-3.1 1.2-3.4 2.1V8z" />
  </svg>
);

export const TwitterIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  className,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M22 5.8c-.8.4-1.6.6-2.5.8a4.2 4.2 0 0 0 1.8-2.3c-.8.5-1.7.9-2.6 1.1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3 4.8a4 4 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.8-.5v.1a4.1 4.1 0 0 0 3.3 4c-.6.2-1.2.2-1.8.1.5 1.5 2 2.5 3.7 2.5A8.2 8.2 0 0 1 2 18.2a11.6 11.6 0 0 0 6.3 1.8c7.6 0 11.8-6.3 11.8-11.8v-.6c.8-.6 1.5-1.3 2-2.2z" />
  </svg>
);

export const PhoneIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    width={width}
    height={height}
    fill={color}
    className={className}
    viewBox="0 0 24 24"
  >
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55.57 1 1 0 011 1v3.61a1 1 0 01-1 1A16.94 16.94 0 013 5a1 1 0 011-1h3.6a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.21 1.11l-2.2 2.2z" />
  </svg>
);

export const FloatCallIcon = ({
  width = 26,
  height = 26,
  color = "currentColor",
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill={color}
    className={className}
  >
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2
        19.86 19.86 0 0 1-8.63-3.07
        19.5 19.5 0 0 1-6-6
        A19.86 19.86 0 0 1 2.08 4.18
        2 2 0 0 1 4.06 2h3
        a2 2 0 0 1 2 1.72
        c.12.9.32 1.77.59 2.6
        a2 2 0 0 1-.45 2.11L8.09 9.91
        a16 16 0 0 0 6 6
        l1.48-1.11
        a2 2 0 0 1 2.11-.45
        c.83.27 1.7.47 2.6.59
        a2 2 0 0 1 1.72 2.0z"
    />
  </svg>
);

export const FloatWhatsappIcon = ({
  width = 26,
  height = 26,
  color = "currentColor",
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 175.216 175.552"
    width={width}
    height={height}
    color={color}
  >
    <defs>
      <linearGradient
        id="b"
        x1="85.915"
        x2="86.535"
        y1="32.567"
        y2="137.092"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#57d163" />
        <stop offset="1" stop-color="#23b33a" />
      </linearGradient>
      <filter
        id="a"
        width="1.115"
        height="1.114"
        x="-.057"
        y="-.057"
        color-interpolation-filters="sRGB"
      >
        <feGaussianBlur stdDeviation="3.531" />
      </filter>
    </defs>
    <path
      fill="#b3b3b3"
      d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
      filter="url(#a)"
    />
    <path
      fill="#fff"
      d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
    />
    <path
      fill="url(#linearGradient1780)"
      d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
    />
    <path
      fill="url(#b)"
      d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
    />
  </svg>
);
