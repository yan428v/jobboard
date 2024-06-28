import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => (
    <header className={styles.header}>
        <div>
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={156}
                    height={44}
                    priority
                />
            </Link>
        </div>
        <ul>
            <li>
                <Link href="/create-post">Добавить вакансию</Link>
            </li>
            <li>
                <Link href="/">Связь с нами</Link>
            </li>
            {/* <li> */}
            {/*    <Link href="/">Добавить резюме</Link> */}
            {/* </li> */}
            {/* <li> */}
            {/*    <Link href="/">Поддержать проект</Link> */}
            {/* </li> */}
        </ul>
    </header>
);

export default Header;
