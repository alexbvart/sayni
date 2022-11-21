import * as React from "react"

const Loupe = (props) => (
  <svg
    width={22}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15.264 15.048 3.648 3.04M18.365 9.576c0 4.516-3.74 8.208-8.39 8.208-4.652 0-8.391-3.692-8.391-8.208s3.74-8.208 8.39-8.208c4.651 0 8.39 3.692 8.39 8.208Z"
      stroke="#000"
      strokeWidth={1.824}
    />
    <path
      d="m19.793 17.176-6.718-5.573-3.1-1.014 11.369 1.014-1.55 5.573Z"
      fill="#F7F6F9"
    />
  </svg>
)

export default Loupe
