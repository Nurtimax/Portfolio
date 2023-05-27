import { FC, SVGProps } from 'react';

const Loading: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg id="mainSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" {...props}>
      <defs>
        <linearGradient
          id="aiGrad"
          x1="513.98"
          y1="290"
          x2="479.72"
          y2="320"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#000" stop-opacity="0" />
          <stop offset=".15" stop-color="#EF476F" />
          <stop offset=".4" stop-color="#359eee" />
          <stop offset=".6" stop-color="#03cea4" />
          <stop offset=".78" stop-color="#FFC43D" />
          <stop offset="1" stop-color="#000" stop-opacity="0" />
        </linearGradient>
      </defs>

      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <ellipse className="ell" cx="400" cy="300" rx="80" ry="80" />
      <path
        id="ai"
        opacity="0.85"
        d="m417.17,323.85h-34.34c-3.69,0-6.67-2.99-6.67-6.67v-34.34c0-3.69,2.99-6.67,6.67-6.67h34.34c3.69,0,6.67,2.99,6.67,6.67v34.34c0,3.69-2.99,6.67-6.67,6.67Zm-5.25-12.92v-21.85c0-.55-.45-1-1-1h-21.85c-.55,0-1,.45-1,1v21.85c0,.55.45,1,1,1h21.85c.55,0,1-.45,1-1Zm23.08-16.29h-11.15m-47.69,0h-11.15m70,10.73h-11.15m-47.69,0h-11.15m40.37,29.63v-11.15m0-47.69v-11.15m-10.73,70v-11.15m0-47.69v-11.15"
        stroke="url(#aiGrad)"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
    </svg>
  );
};

export default Loading;
