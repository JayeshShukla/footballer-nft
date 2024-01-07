import React from "react";

export const NavbarSearchIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ animation: "splashAnimation 2s infinite ease-in-out" }}
    >
      <style>
        {`@keyframes splashAnimation {
          0%, to {
            transform: translateY(0) scale(1);
          }
          25%, 75% {
            transform: translateY(-6px) scale(1.1);
          }
          50% {
            transform: translateY(4px) scale(0.9);
          }
        }`}
      </style>
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <path
          id="waterDrop"
          d="M11.71.573C9.47 1.29 8 3.054 7.3 5.865 6.251 10.08 4.952 10.618.72 9.119c1.52 2.807 4.6 3.932 6.58 3.932 1.98 0 7.11-2.757 6.522-7.998A21.678 21.678 0 0 0 11.71.573Z"
        />
        <path
          id="splash"
          d="m14.18 12.77 5.53 5.54a.99.99 0 0 1-1.4 1.4l-5.53-5.539a7.92 7.92 0 1 1 1.399-1.401Zm-6.26 1.09a5.94 5.94 0 1 0 0-11.88 5.94 5.94 0 0 0 0 11.88Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(2 2)">
        <g transform="translate(1 2)">
          <mask id="waterDropMask" fill="#fff">
            <use xlinkHref="#waterDrop" />
          </mask>
          <use fill="#D8D8D8" xlinkHref="#waterDrop" />
          <g fill="#FFA0A0" mask={`url(#waterDropMask)`}>
            <path d="M-3-4h24v24H-3z" />
          </g>
        </g>
        <mask id="splashMask" fill="#fff">
          <use xlinkHref="#splash" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#splash" />
        <g fill="#7600FF" mask={`url(#splashMask)`}>
          <path d="M-2-2h24v24H-2z" />
        </g>
      </g>
    </svg>
  );
};
