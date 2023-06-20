import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/imagenGif.gif"
          alt="Next.js Logo"
          width={1024}
          height={365}
          priority
        />
      </div>
      <div>
        COMING SOON FALL 2023
      </div>
    </main>
  )
}
