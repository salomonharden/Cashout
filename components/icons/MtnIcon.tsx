
import React from 'react';

const MtnIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" {...props}>
        <defs>
            <clipPath id="a">
                <path d="M0 0h250v250H0z" />
            </clipPath>
        </defs>
        <g clipPath="url(#a)">
            <path fill="#ffcb05" d="M0 0h250v250H0z" />
            <path
                d="M51.99 125c0-40.34 32.67-73.01 73.01-73.01s73.01 32.67 73.01 73.01c0 40.34-32.67 73.01-73.01 73.01S51.99 165.34 51.99 125"
                fill="#00498d"
            />
            <path
                d="M171.18 102.39c-11.45-10.23-28.18-13.88-43.2-13.88-15.65 0-31.11 4.5-44.11 13.03l-1.48.97v36.57l25.86-18.7c4.66-3.4 11.23-3.4 15.89 0l21.32 15.35V99.78l-1.48.97a38.44 38.44 0 0 1-12.8 5.64z"
                fill="#fff"
            />
            <path
                d="M125.75 162.22c10.38-4.47 19.34-11.75 25.01-20.9l1.48-2.34v-36.57l-25.86 18.7c-4.66 3.4-11.23 3.4-15.89 0l-21.32-15.35v39.54l1.48-2.34c3.48-5.32 8-9.92 13.2-13.43z"
                fill="#fff"
            />
        </g>
    </svg>
);

export default MtnIcon;
   