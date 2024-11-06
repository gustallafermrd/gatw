import React from 'react'
import Image from "next/image";

const LoadingBar = () => {
  return (
    <>
      <p><Image className='my-4' src="/loading-bar.svg" alt="Loading Bar" width={100} height={100} /></p>
    </>
  )
}

export default LoadingBar