import Image from 'next/image'
import styles from './../page.module.css'
import Link from 'next/link'

export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <object data="/cv_rahul_bali.pdf" type="application/pdf" width="100%" height="800px">
          <p>
            Your browser does not support PDF plugin.
          </p>
        </object>

        <a href="/cv_rahul_bali.pdf" download>Download the resume.</a>

        <span style={{ fontFamily: "'CMU Serif', cmr10, LMRoman10-Regular, 'Latin Modern Math', 'Nimbus Roman No9 L', 'Times New Roman', Times, serif" }}>
          L<span style={{ textTransform: 'uppercase', fontSize: '0.75em', verticalAlign: '0.25em', marginLeft: '-0.36em', marginRight: '-0.15em', lineHeight: '1ex' }}>a</span>
          T<span style={{ textTransform: 'uppercase', verticalAlign: '-0.25em', marginLeft: '-0.1667em', marginRight: '-0.125em', lineHeight: '1ex' }}>e</span>
          X
        </span>

        This resume is made using LateX.
        <Link href="https://www.overleaf.com/read/rncpndbhtsny#057a7a" target='_blank'>
          Click this to view the Project
        </Link>

        ***

        <Link href="/about">About</Link>
        <Link href="/">Home</Link>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
