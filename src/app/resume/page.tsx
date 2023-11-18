import Image from 'next/image'
import styles from './../page.module.css'
import Link from 'next/link'
import Nav from '../nav'

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

        <p>This resume is made using&nbsp;
          <span style={{ fontFamily: "'CMU Serif', cmr10, LMRoman10-Regular, 'Latin Modern Math', 'Nimbus Roman No9 L', 'Times New Roman', Times, serif" }}>
            L<span style={{ textTransform: 'uppercase', fontSize: '0.75em', verticalAlign: '0.25em', marginLeft: '-0.36em', marginRight: '-0.15em', lineHeight: '1ex' }}>a</span>
            T<span style={{ textTransform: 'uppercase', verticalAlign: '-0.25em', marginLeft: '-0.1667em', marginRight: '-0.125em', lineHeight: '1ex' }}>e</span>
            X
          </span>.</p>

        ***

        <Link href="https://www.overleaf.com/read/rncpndbhtsny#057a7a" target='_blank'>
          Source Code for Resume.
        </Link>


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
