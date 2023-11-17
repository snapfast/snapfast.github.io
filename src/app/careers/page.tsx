import Image from 'next/image'
import styles from './../page.module.css'
import Link from 'next/link'
import CompanyList from './careers'
import Nav from '../nav'

export default function Careers() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h1>Careers&nbsp;- Company List</h1>
          <code className={styles.code}></code>
        </div>

        <CompanyList />

        To modify this list:  <a href='https://github.com/snapfast/snapfast.github.io/tree/main/public/careers.json' target='_blank' >Click here</a>

        ***

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

      <Nav />

    </main>
  )
}
