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
          Rahul Bali&nbsp;
          <code className={styles.code}></code>
        </p>
        <div>
          <a
            href="https://github.com/snapfast"
            target="_blank"
            rel="noopener noreferrer"
          >
            @snapfast
          </a>
        </div>

        <p>
            Hello, my name is Rahul Bali, and I&apos;m a software engineer.
        </p>
        <p>
          <br />
          <em>I recently started reading more about various different topics like music theory, how religion says cosmos was born, indian way of knowledge (shastra). I am happy to hear about your stories and things that you are learning. Lets talk from our hearts !</em>
          <br />
          <br />
          <em>This is the link to my Google calendar, please go ahead and setup a meet with video call.</em>
          <br />
          <em><a href="https://calendar.google.com/calendar/u/0?cid=cmFodWxyZGIxOEBnbWFpbC5jb20" target="_blank" >https://calendar.google.com/calendar/u/0?cid=cmFodWxyZGIxOEBnbWFpbC5jb20</a></em>
          <br />
          <br />
        </p>
        <p>

          Connect with me on Twitter <a href="https://twitter.com/_rahulbali" target="_blank" rel="noopener noreferrer" >@_rahulbali</a>
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
