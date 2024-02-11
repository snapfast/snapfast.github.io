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
        <p>About Rahul Bali</p>
      </Link>

      <Link
        href="/resume"
        className={styles.card}
      >
        <h2>
          Resume <span>-&gt;</span>
        </h2>
        <p>Learn about Rahul&apos;s work!</p>
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

      <Link
        href="/writings"
        className={styles.card}
      >
        <h2>
          Writings <span>-&gt;</span>
        </h2>
        <p>
          thoughts and studies I did for your benefit
        </p>
      </Link>
    </div>
  )
}
