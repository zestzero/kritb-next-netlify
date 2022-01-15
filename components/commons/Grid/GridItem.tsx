import { FunctionComponent } from 'react'
import styles from './GridItem.module.scss'

const GridItem: FunctionComponent = (props) => {
    return <div className={styles.container}>{props.children}</div>
}

export default GridItem
