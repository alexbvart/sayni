import * as React from "react"

const Bag = ({color="#fff"}) => (
  <svg
    width={27}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.017 2.319 5.97 6.377M17.15 2.319l4.048 4.058"
      stroke={color}
      strokeWidth={1.75}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.403 8.86c0-2.07 1.107-2.237 2.482-2.237h17.397c1.375 0 2.482.168 2.482 2.236 0 2.404-1.107 2.236-2.482 2.236H4.885c-1.375 0-2.482.168-2.482-2.236Z"
      stroke={color}
      strokeWidth={1.75}
    />
    <path
      d="m4.08 11.264 1.577 6.306c.357 2.168 1.218 3.756 4.416 3.756h6.742c3.477 0 3.991-1.52 4.394-3.622l1.878-6.44"
      stroke={color}
      strokeWidth={1.75}
      strokeLinecap="round"
    />
  </svg>
)

export default Bag
