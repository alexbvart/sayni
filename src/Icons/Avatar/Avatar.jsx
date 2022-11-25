import * as React from "react"

const Avatar = (props) => (
  <svg
    width={16}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.8 8.4a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Zm0-7.2a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM15.282 12.822a10.297 10.297 0 0 0-14.958 0 1.2 1.2 0 0 0-.324.822V16.8A1.2 1.2 0 0 0 1.2 18h13.2a1.2 1.2 0 0 0 1.2-1.2v-3.156a1.2 1.2 0 0 0-.318-.822ZM14.4 16.8H1.2v-3.162a9.103 9.103 0 0 1 13.2 0V16.8Z"
      fill="#5B5858"
    />
  </svg>
)

export default Avatar
