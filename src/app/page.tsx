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
          <br />
          <em>I recently started reading more about various different topics like music theory, how cosmos was born, Indian way of knowledge (shastra).</em>
          <em>I am happy to hear about your stories and things that you are learning. Lets talk from our hearts !</em>
          <br />
        </p>
        <p>
          <br />
          <em>This is the link to my Google calendar, please go ahead and setup a meet with video call.</em>
          <br />
        </p>
        <p>
          <br />
          <em><a href="https://calendar.google.com/calendar/u/0?cid=cmFodWxyZGIxOEBnbWFpbC5jb20" target="_blank" >https://calendar.google.com/calendar/u/0?cid=cmFodWxyZGIxOEBnbWFpbC5jb20</a></em>
          <br />
        </p>
        <br />
        <p>
          DM on <a href="https://linkedin.com/in/rahulbali2" target="_blank" rel="noopener noreferrer" >LinkedIn</a> and <a href="https://instagram.com/bali.rahul" target="_blank" rel="noopener noreferrer" >Instagram</a>
        </p>
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

      <Nav />

    </main>
  )
}
