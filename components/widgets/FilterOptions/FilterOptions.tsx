import React from 'react';
import DataFilter from '../DataFilter/DataFilter';
import CityFilter from '../CityFilter/CityFilter';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import styles from './FilterOptions.module.scss';

const FilterOptions = () => {
    return (
        <div className={styles.filterOptions}>
            <div>
                <DataFilter />
                <CityFilter />

            </div>
            <CategoryFilter />

        </div>
    );
};

export default FilterOptions;
