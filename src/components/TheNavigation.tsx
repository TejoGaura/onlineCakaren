import React from 'react'
import { NavLink } from 'react-router-dom'

//styles
import styles from './TheNavigation.module.scss'

interface Props {}

const TheNavigation = (props: Props) => {
    return (
        <nav className={styles.navigation}>
            <NavLink to="/" activeClassName={styles.active} exact>Domov</NavLink>
            <NavLink to="cakaren" activeClassName={styles.active}>Čakáreň</NavLink>
            <NavLink to="onas" activeClassName={styles.active}>O nás</NavLink>
        </nav>
    )
}

export default TheNavigation
