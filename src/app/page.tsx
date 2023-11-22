import Image from 'next/image'
import styles from './page.module.css'
import Nav from './nav'

export default function Home() {
  return (
    <main className={styles.main}>
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
          Hello, my name is Rahul Bali, and I'm a software engineer. Outside of programming, I love to travel and explore new places. I'm always looking for the next exciting destination. Music is another one of my passions, and I enjoy discovering new genres and artists. I believe that life is a beautiful journey, full of surprises and learning opportunities. Every day, I strive to grow both personally and professionally. I'm looking forward to the adventures that await!
        </p>
        <p>
          <br />
          <em>"In the end, it's not the years in your life that count. It's the life in your years." - Abraham Lincoln</em>
          <br />
          <br />
          <em>"Life is what happens when you're busy making other plans." - John Lennon</em>
          <br />
          <br />
        </p>
        <p>
          Let's discuss life, music, tech, and everything in between.<br></br>
          Connect with me on Twitter <a href="https://twitter.com/_rahulbali" target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2' }}>@_rahulbali</a>
        </p>


      </div>

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

      <Nav />

    </main>
  )
}
