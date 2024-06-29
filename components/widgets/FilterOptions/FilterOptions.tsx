import React from 'react';
import DateFilter from '../DataFilter/DateFilter';
import CityFilter from '../CityFilter/CityFilter';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import styles from './FilterOptions.module.scss';

const FilterOptions = () => {
    return (
        <div className={styles.filterOptions}>
            <div className={styles.dateCityFilterContainer}>
                <DateFilter />
                <CityFilter />
            </div>
            <div className={styles.categoryFilterContainer}>
                <CategoryFilter />
            </div>

        </div>
    );
};

export default FilterOptions;
