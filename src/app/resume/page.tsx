import Image from 'next/image'
import styles from './../page.module.css'
import Link from 'next/link'
import Nav from '../nav'

export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Résumé
          <code className={styles.code}></code>
        </p>

        <a href="/cv_rahul_bali_main.pdf" download>Download the resume.</a>

        <object data="/cv_rahul_bali_main.pdf" type="application/pdf" width="100%" height="800px">
          <p>
            Your browser does not support PDF plugin.
          </p>
        </object>

        <p>
          <p>This resume is made using&nbsp;
          <span style={{ fontFamily: "'CMU Serif', cmr10, LMRoman10-Regular, 'Latin Modern Math', 'Nimbus Roman No9 L', 'Times New Roman', Times, serif" }}>
            L<span style={{ textTransform: 'uppercase', fontSize: '0.75em', verticalAlign: '0.25em', marginLeft: '-0.36em', marginRight: '-0.15em', lineHeight: '1ex' }}>a</span>
            T<span style={{ textTransform: 'uppercase', verticalAlign: '-0.25em', marginLeft: '-0.1667em', marginRight: '-0.125em', lineHeight: '1ex' }}>e</span>
            X
          </span>.</p>
        </p>

        <Link href="https://www.overleaf.com/read/rncpndbhtsny#057a7a" target='_blank'>
          Source Code for Full CV.
        </Link>

        <Link href="https://www.overleaf.com/read/pxwdcqvqmhdk#5c3b66" target='_blank'>
          Source Code for Trimmed Resume.
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
