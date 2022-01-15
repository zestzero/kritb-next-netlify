import { FunctionComponent } from 'react'
import styles from './Animate.module.scss'

type AnimateType = 'focus-in-contract' | 'text-pop-up-top'
interface Props {
  animate: AnimateType
}

const Animate: FunctionComponent<Props> = (props) => {
  return <span className={styles[props.animate]}>{props.children}</span>
}

export default Animate
