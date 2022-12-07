import * as React from "react"

const Add = (props) => (
  <svg
  width={89}
  height={211}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    d="M0 210.5V0l28.29 36.97a141.208 141.208 0 0 0 37.674 34.163c29.808 18.502 29.627 61.938-.334 80.19l-4.7 2.863a151.375 151.375 0 0 0-30.633 24.64L0 210.5Z"
    fill="url(#ab)"
  />
  <path
    d="M34.393 109.184h16.782M42.786 117.58v-16.782"
    stroke="#000"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="bevel"
  />
  <defs>
    <linearGradient
      id="ab"
      x1={82.711}
      y1={118}
      x2={0.211}
      y2={118}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#fff" stopOpacity={1} />
      <stop offset={1} stopColor="#fff" stopOpacity={0} />
    </linearGradient>
  </defs>
</svg>
)

export default Add
