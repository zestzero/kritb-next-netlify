import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Image
          src="/logo.png"
          alt="Netlify Logo"
          width={25}
          height={25}
          className={styles.logo}
          layout="fixed"
        />
      </footer>
    </>
  );
}
