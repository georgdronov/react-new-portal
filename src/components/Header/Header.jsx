import React from 'react'
import { formateDate } from '../../helpers/formateDate'
import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>NEWS PORTAL</h1>
        <p className={styles.date}>{formateDate(new Date)}</p>
    </header>
  )
}
