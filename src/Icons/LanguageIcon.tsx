import { memo } from 'react';

const LanguageIcon = ({ color = '#474747' }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_100_5502)">
        <g clipPath="url(#clip1_100_5502)">
          <path
            d="M4.5336 6.6665H13.8669"
            stroke={color}
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.2003 4V6.66667C11.2003 12.5573 8.21493 17.3333 4.5336 17.3333"
            stroke={color}
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.86798 12C5.86798 14.8587 9.80398 17.2107 14.8013 17.3333"
            stroke={color}
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.2008 26.6665L20.5341 14.6665L25.8675 26.6665"
            stroke={color}
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.6675 24H16.4008"
            stroke={color}
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_100_5502">
          <rect width="32" height="32" fill="white" />
        </clipPath>
        <clipPath id="clip1_100_5502">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(-0.799988)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default memo(LanguageIcon);
