import { FunctionComponent } from 'react'
import Image from 'next/image'
import styles from './Icon.module.scss'

interface Props {
  href?: string
  iconName: string
  size: number
}
const Icon: FunctionComponent<Props> = (props) => {
  const { href, iconName, size } = props
  return href ? (
    <a className={styles.container} href={href}>
      <Image
        src={`/icons/${iconName}.svg`}
        width={size}
        height={size}
        alt={iconName}
      />
    </a>
  ) : (
    <span className={styles.container}>
      <Image
        src={`/icons/${iconName}.svg`}
        width={size}
        height={size}
        alt={iconName}
      />
    </span>
  )
}

export default Icon
