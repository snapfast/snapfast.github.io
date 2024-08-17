import Image from 'next/image'
import styles from './../page.module.css'
import Link from 'next/link'
import Nav from '../nav'


export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}></code>
        </p>

        <h2>Contact</h2>

        <Image
          src="/upi.png"
          alt="token"
          width={400}
        />
        <p>if I have had a chance to help you any form or state, kindly share your token of appreciation below.</p>

      </div>

      <Nav />

    </main>
  )
}
