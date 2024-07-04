import React from 'react';
import styles from './CategoryFilter.module.scss';
import { JobCategory } from '../../../lib/types/types';
import Button from '../../shared/Button/Button';
import { addCategoryFilter, removeCategoryFilter } from '../../../lib/redux/slice';
import { useAppDispatch, useAppSelector } from '../../../lib/redux/hooks';

const CategoryFilter = () => {
    const categoryArray = Object.values(JobCategory);
    const selectedCategories = useAppSelector((state) => state.filters.categories);
    const dispatch = useAppDispatch();

    const handleCategoryChange = (category: string) => {
        if (selectedCategories.includes(category)) {
            dispatch(removeCategoryFilter(category));
        } else {
            dispatch(addCategoryFilter(category));
        }
    };

    return (
        <div className={styles.categoryFilters}>
            {categoryArray.map((category) => (
                <Button
                    size="l-button"
                    key={category}
                    isSelected={selectedCategories.includes(category)}
                    onClick={() => handleCategoryChange(category)}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};

export default CategoryFilter;
