import { FunctionComponent } from 'react'
import Animate from 'components/commons/Animate/Animate'
import styles from './Splash.module.scss'

const Splash: FunctionComponent = () => {
  return (
    <Animate animate="text-pop-up-top">
      <h1 className={styles.title}>KRIT BANNACHAISIRISUK</h1>
    </Animate>
  )
}

export default Splash
