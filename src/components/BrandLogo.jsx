import React from 'react';

/**
 * FoundersHouseIcon
 * Custom heritage mansion roofline + startup beacon icon:
 * - North Kolkata heritage house pediment & colonial columns
 * - Arched golden gateway
 * - 4-point electric startup spark / beacon
 * - Crimson & gold comic aesthetic with black ink contours
 */
export const FoundersHouseIcon = ({ className = "w-8 h-8", ...props }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Outer Comic Badge in Crimson with Black Outline */}
    <rect
      x="2"
      y="2"
      width="32"
      height="32"
      rx="9"
      fill="#E11D48"
      stroke="#000000"
      strokeWidth="2.5"
    />
    
    {/* Subtle Inner Highlight */}
    <rect
      x="3.5"
      y="3.5"
      width="29"
      height="29"
      rx="7.5"
      stroke="#FFFFFF"
      strokeWidth="1"
      strokeOpacity="0.25"
    />

    {/* Kolkata Heritage Mansion Pediment Roof & Columns */}
    <path
      d="M7 19L18 9L29 19H26V28H10V19H7Z"
      fill="#140306"
      stroke="#000000"
      strokeWidth="2"
      strokeLinejoin="round"
    />

    {/* Classical Heritage Columns */}
    <rect x="11.5" y="19" width="2" height="9" fill="#FFF9F2" fillOpacity="0.8" />
    <rect x="22.5" y="19" width="2" height="9" fill="#FFF9F2" fillOpacity="0.8" />

    {/* Grand Arched Gateway with Golden Startup Warmth */}
    <path
      d="M15 28V20.5C15 18.84 16.34 17.5 18 17.5C19.66 17.5 21 18.84 21 20.5V28H15Z"
      fill="#FFC800"
      stroke="#000000"
      strokeWidth="1.5"
    />
    {/* Inner Arched Portal Depth */}
    <path
      d="M16.5 28V21.5C16.5 20.67 17.17 20 18 20C18.83 20 19.5 20.67 19.5 21.5V28H16.5Z"
      fill="#140306"
    />

    {/* Beacon / Electric Startup 4-Point Star glowing above the roof */}
    <path
      d="M18 4.5L19.2 7.8L22.5 9L19.2 10.2L18 13.5L16.8 10.2L13.5 9L16.8 7.8L18 4.5Z"
      fill="#FFC800"
      stroke="#000000"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    {/* Bright core spark */}
    <circle cx="18" cy="9" r="1.2" fill="#FFFFFF" />
  </svg>
);

