import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Filter.module.scss';

const Filter = () => (

    // const [isOpen, setIsOpen] = useState(false); // Состояние для управления видимостью

    // const toggleFilter = () => setIsOpen(!isOpen); // Функция для переключения состояния

    <div className={styles.filterBar}>
        <button className={styles.filterButton}>
            Показать фильтры (2)
            <Image
                className={styles.filterIcon}
                src="/filter.svg"
                alt="filter"
                width={10}
                height={16}
            />
        </button>
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Найти вакансию"
                className={styles.searchInput}
            />
            <button className={styles.searchButton}>
                <Image
                    className={styles.searchIcon}
                    src="/search.svg"
                    alt="search"
                    width={20}
                    height={20}
                />
            </button>
        </div>
    </div>
);

export default Filter;
