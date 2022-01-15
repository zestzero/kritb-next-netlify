import React, { FunctionComponent } from 'react'
import GridItem from './GridItem'
import styles from './Grid.module.scss'

interface Props<T> {
    children: T[]
}

const Grid = <T extends {}>(props: Props<T>) => {
    return (
        <div className={styles.container}>
            {props.children.map((item, index) => (
                <GridItem key={`GridItem--${index}`}>{item}</GridItem>
            ))}
        </div>
    )
}

export default Grid
