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
        href="/careers"
        className={styles.card}
      >
        <h2>
          Careers <span>-&gt;</span>
        </h2>
        <p>Career links for Tech Co.</p>
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
        href="/writings"
        className={styles.card}
      >
        <h2>
          Writings <span>-&gt;</span>
        </h2>
        <p>
        Insights, Perspectives, Explorations
        </p>
      </Link>


      <Link
        href="/contact"
        className={styles.card}
      >
        <h2>
          Contact <span>-&gt;</span>
        </h2>
        <p>
        Personal note, and love.
        </p>
      </Link>
    </div>
  )
}
