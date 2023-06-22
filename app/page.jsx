"use client";
import Image from 'next/image'
import styles from './page.module.css'
import AboutButton from './aboutButton'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/imagenGif.gif"
          alt="Next.js Logo"
          width={1920}
          height={540}
        />
      </div>
      <div>
        COMING SOON FALL 2023
      </div>
    </main>
  )
}
