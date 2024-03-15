import Image from 'next/image'
import styles from './../page.module.css'
import Link from 'next/link'
import Nav from '../nav'

export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>

        <p>
          Writings & Notes
        </p>

        <br></br>

        <Link href="https://snapfast.github.io/cloud_notes/" target='_blank'>
          Notes for Cloud and DevOps
        </Link>

      </div>

      <Nav />

    </main>
  )
}
