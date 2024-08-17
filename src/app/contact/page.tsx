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

        <br />
        <br />
        <br />

        <p>Did I just save your day? Or at least a couple of hours?</p>
        <p>If so, how about we celebrate with a virtual coffee? ☕️ I'll take mine with a dash of appreciation!</p>
        
        <Image
          src="/upi.png"
          alt="token"
          width={400}
        />

      </div>

      <Nav />

    </main>
  )
}
