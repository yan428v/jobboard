import React from 'react';
import { JobCategory } from '@/lib/types/types';
import { addCategoryFilter, removeCategoryFilter } from '@/lib/redux/slice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import styles from './CategoryFilter.module.scss';
import Button from '../../shared/Button/Button';

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
