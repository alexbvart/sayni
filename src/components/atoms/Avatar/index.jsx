import React from 'react'

export default function Avatar({className,image}) {

  const imageSrc = image ? image :  "https://i.pinimg.com/564x/71/e0/b6/71e0b625bff062c149a1cfd228d8482b.jpg"
  return (
    <img 
      // src="https://media.licdn.com/dms/image/D4E03AQFHHze3ssj8EQ/profile-displayphoto-shrink_800_800/0/1670863237813?e=1677110400&v=beta&t=B23MwcOVg1N8d6w4TOPd5MSHkZGf_ju-ZPl_NqTKsVY" 
      src={imageSrc} 
      alt="avatar"  className={className}/>
  )
}
