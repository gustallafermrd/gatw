import React from 'react'
import Image from "next/image";

const CenterBar = () => {
  return (
    <>
      <p><Image className='my-4 mx-auto' src="/loading-bar.svg" alt="Center Bar" width={100} height={100} /></p>
    </>
  )
}

export default CenterBar