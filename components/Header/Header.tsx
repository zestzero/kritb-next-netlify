import Logo from 'components/Logo/Logo'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <div className={styles['header-container']}>
      <Logo />
    </div>
  )
}
