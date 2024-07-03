'use client';

import React, {
    useState,
} from 'react';
import Image from 'next/image';
import styles from './Filter.module.scss';
import FilterOptions from '../../widgets/FilterOptions/FilterOptions';

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFilter = () => setIsOpen(!isOpen);

    return (
        <div className={styles.filterBarWrapper}>
            <div className={styles.filterBar}>
                <button onClick={toggleFilter} type="button" className={styles.filterButton}>
                    <p>Показать фильтры (2)</p>
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
                    <button type="button" className={styles.searchButton}>
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
            <div className={styles.filterOptionWrapper}>
                {/* <div className={`${styles.filterOptionWrapper} ${isOpen ? 'open' : ''}`}> */}
                {isOpen && <FilterOptions />}
            </div>
        </div>

    );
};

export default Filter;
