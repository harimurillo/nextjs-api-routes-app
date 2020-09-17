import Link from 'next/link'
import styles from '../styles.module.css'

export default function Cabecalho({ cabecalho }) {
  return (
    <div>
        <label className={styles.estiloCabecalho}><center>Bem Vindo!</center></label>
    </div>
  )
}