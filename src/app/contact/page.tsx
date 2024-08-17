import Image from 'next/image'
import styles from './../page.module.css'
import Link from 'next/link'
import Nav from '../nav'
import Image from 'next/image';


export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Contact
          <code className={styles.code}></code>
        </p>

        ***

        Hey there, if I have had a chance to help you any form or state, kindly share your token of appreciation below.

        <Image
          src="/upi.png"
          alt="token"
          width={300}
        />



      </div>=

      <Nav />

    </main>
  )
}
