import Image from 'next/image'
import styles from './page.module.css'
import Nav from './nav'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/rahul.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Hello, my name is Rahul Bali, and I&apos;m a software engineer.</code>
        </p>
        {/* p tag is used for the new section */}
        <p>
          <br /><br />
        </p>
        <p>
          <br />
          <br />
        </p>
        <p>
          <br />
          <br />
        </p>
        <br />
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/bul33.svg"
          alt="Bull"
          width={180}
          height={180}
          priority
        />
      </div>

      <a href="https://linkedin.com/in/rahulbali2" target="_blank" >LinkedIn</a> <a href="https://instagram.com/bali.rahul" target="_blank" >Instagram</a>

      <Nav />

    </main>
  )
}
