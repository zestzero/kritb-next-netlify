import { FunctionComponent } from 'react'
import styles from './Animate.module.scss'

interface Props {
  animate: 'focus-in-contract'
}

const Animate: FunctionComponent<Props> = (props) => {
  return <span className={styles[props.animate]}>{props.children}</span>
}

export default Animate
