import Link from 'next/link'
import styles from '../styles.module.css'

export default function Person({ person }) {
  return (
    <li className={styles.hello}>
      <Link href="/person/[id]" as={`/person/${person.id}`}>
        <button className={styles.estiloBotao}>{person.name}</button>
      </Link>
    </li>
  )
}
