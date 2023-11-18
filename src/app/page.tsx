import Image from 'next/image'
import styles from './page.module.css'
import Nav from './nav'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Software Engineering&nbsp;
          <code className={styles.code}></code>
        </p>
        <div>
          <a
            href="https://github.com/snapfast"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}snapfast @ Github
          </a>
        </div>

        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lectus ipsum, blandit id volutpat maximus, rhoncus ut neque. Nulla dictum ex nec lectus efficitur euismod. Morbi molestie ligula hendrerit nunc pulvinar, non tincidunt augue pulvinar. Duis at lectus non diam viverra congue sit amet sed mi. Nunc tempus magna quis libero pulvinar, nec tempus nulla fermentum. In dictum nisi id porta fringilla. Nulla metus justo, rhoncus sit amet volutpat a, vestibulum a nisl. Quisque sit amet sapien malesuada, egestas sapien ac, pellentesque ipsum. Aenean tempor quam a leo pharetra, in consectetur nisl pulvinar. Ut ac elit dui. Donec quis pretium dolor. Fusce eu sollicitudin ipsum. Donec pulvinar placerat ipsum, sit amet facilisis turpis. Quisque at commodo turpis.

        </p>
        <p>
          Aenean feugiat non sem sed dapibus. Vestibulum ut porttitor augue. Curabitur non diam eget ligula semper aliquam. Sed volutpat, felis ac maximus finibus, lectus enim ornare nisl, vel gravida lorem dolor ut arcu. Sed fermentum condimentum diam et hendrerit. Ut vitae leo ex. Etiam ac vehicula ante, in commodo tortor. Vestibulum congue fermentum blandit. Curabitur suscipit quam suscipit, interdum tellus id, euismod urna. Cras at tempus nisl. Vestibulum commodo, augue at vulputate lobortis, turpis diam facilisis est, nec suscipit purus mauris vitae mauris. Ut magna lorem, ornare eget purus lacinia, consequat aliquet felis. Proin nec aliquet sem, in scelerisque dui. Aliquam lobortis commodo libero, rhoncus maximus elit gravida in. </p>


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
