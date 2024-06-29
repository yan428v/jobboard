import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => (
    <div className={styles.headerWrapper}>
        <header className={styles.header}>

            <div className={styles.logoContainer}>
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={156}
                        height={44}
                        priority
                        className={styles.logo}
                    />
                </Link>
            </div>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link
                        href="/create-post"
                        className={styles.navLink}
                    >
                        Добавить вакансию

                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link
                        href="/"
                        className={styles.navLink}
                    >
                        Связь с нами
                    </Link>
                </li>
            </ul>

        </header>
    </div>
);

export default Header;
