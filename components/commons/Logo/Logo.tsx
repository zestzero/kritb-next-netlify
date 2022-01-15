import { FunctionComponent } from 'react'
import Image from 'next/image'

const Logo: FunctionComponent = () => {
  return (
    <Image src="/logo.png" alt="Krit B's Logo" width="45px" height="45px" />
  )
}

export default Logo
