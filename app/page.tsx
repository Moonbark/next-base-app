import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.main}>
      <p>Kamajor&apos;s Next base app&nbsp;</p>
      <div>
        <a
          href="https://github.com/KamajorQA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Original author:
          <Image
            src="/icons/gitHub.svg"
            alt="GitHub link"
            className={styles.vercelLogo}
            width={35}
            height={35}
            priority
          />
        </a>
      </div>

      <div className={styles.center}>
        bootstrapped with: &nbsp;
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </section>
  );
}
