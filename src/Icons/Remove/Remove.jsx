import * as React from "react"

const Remove = (props) => (
  <svg
    width={89}
    height={211}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M88.21 0v211l-28.29-37.058a141.327 141.327 0 0 0-37.674-34.244c-29.807-18.546-29.626-62.085.335-80.38l4.7-2.87a151.423 151.423 0 0 0 30.632-24.699L88.21 0Z"
      fill="url(#ac)"
    />
    <path
      d="M34.393 106.184h16.782"
      stroke="#000"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
    <defs>
      <linearGradient
        id="ac"
        x1={5.5}
        y1={92.72}
        x2={87.999}
        y2={92.72}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

export default Remove
