import React from 'react';
import styles from './CategoryFilter.module.scss';
import { JobCategory } from '../../../lib/types/types';
import Button from '../../shared/Button/Button';

const CategoryFilter = () => {
    const categoryArray = Object.values(JobCategory);
    return (
        <div className={styles.categoryFilters}>
            {categoryArray.map((category) => (
                <Button
                    size="l-button"
                    key={category}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};

export default CategoryFilter;
