import React from 'react';

function Hero() {
    <section>
        <h1 className='text-white'>HELLO</h1>
        <svg
    className="editorial"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28"
    preserveAspectRatio="none"
  >
    <defs>
      <path
        id="a"
        d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
      />
    </defs>
    <g className="parallax">
      <use xlinkHref="#a" x={50} fill="#4e6d99" />
      <use xlinkHref="#a" x={50} y={3} fill="#3d5577" />
      <use xlinkHref="#a" x={50} y={6} fill="#2b3d55" />
    </g>
  </svg>
    </section>
}

export default Hero;