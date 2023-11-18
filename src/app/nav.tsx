import styles from './page.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className={styles.grid}>
      <Link
        href="/"
        className={styles.card}
      >
        <h2>
          Home <span>-&gt;</span>
        </h2>
        <p>Find information about Rahul Bali</p>
      </Link>

      <Link
        href="/resume"
        className={styles.card}
      >
        <h2>
          Resume <span>-&gt;</span>
        </h2>
        <p>Learn about Rahul&apos;s work in an non-interactive UI!</p>
      </Link>

      <Link
        href="/careers"
        className={styles.card}
      >
        <h2>
          Careers <span>-&gt;</span>
        </h2>
        <p>Explore starter careers for Tech.</p>
      </Link>

      <a
        href="https://x.com/_rahulbali"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Contact <span>-&gt;</span>
        </h2>
        <p>
          on X.com
        </p>
      </a>
    </div>
  )
}
