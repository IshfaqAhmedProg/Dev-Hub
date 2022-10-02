import React from "react";
import styles from "./Navbar.module.css";
import Link from 'next/link'
import Button from "../Button/Button";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          DEV <span>HUB</span>
        </div>
        <div className={styles.menu}>
            <Link href='/'>
                Home
            </Link>
            <Link href='/Contact'>
                Contact
            </Link>
            <Link href='/AboutUs'>
                About Us
            </Link>
        </div>
        <div className={styles.login}>
            <Link href='/Login'>
                Login
            </Link>
            <Button variant='primary'>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
}
