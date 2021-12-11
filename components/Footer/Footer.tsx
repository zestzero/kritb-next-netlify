import Icon from 'components/commons/Icon/Icon'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Icon
          iconName="github"
          size={24}
          href="https://github.com/zestzero/kritb-next-netlify"
        />
        <Icon
          iconName="linkedin"
          size={24}
          href="https://www.linkedin.com/in/krit-bannachaisirisuk"
        />
      </footer>
    </>
  )
}
