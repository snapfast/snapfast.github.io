import Image from 'next/image'
import styles from './../page.module.css'
import Link from 'next/link'
import Nav from '../nav'

export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>

        <Link href="https://snapfast.github.io/cloud_notes/" target='_blank'>
          Notes for Cloud and DevOps
        </Link>

        <Link href="" target='_blank'>
          blank
        </Link>

        <Link href="" target='_blank'>
          blank
        </Link>

      </div>

      <Nav />

    </main>
  )
}
