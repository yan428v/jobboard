'use client';

import Image from 'next/image';
import Button from '@/components/shared/Button/Button';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { FilterButtonState } from '@/lib/types/types';
import filtersReducer, { resetFilters, setFilterButtonState } from '@/lib/redux/slice';
import { configureStore } from '@reduxjs/toolkit';
import FilterOptions from '../../widgets/FilterOptions/FilterOptions';
import styles from './Filter.module.scss';

const Filter = () => {
    const filterButtonState = useAppSelector((state) => state.filters.filterButtonState);
    const dispatch = useAppDispatch();
    const resetFilter = () => {
        dispatch(resetFilters());
    };
    const toggleFilterButton = () => {
        if (filterButtonState === FilterButtonState.Apply) {
            console.log('Apply');
        }
        if (filterButtonState === FilterButtonState.Hide) {
            dispatch(setFilterButtonState(FilterButtonState.Open));
            console.log('Open');
        } else {
            dispatch(setFilterButtonState(FilterButtonState.Hide));
            console.log('Hide');
        }
    };
    return (
        <div className={styles.filterBarWrapper}>
            <div className={styles.filterBar}>
                <Button
                    onClick={toggleFilterButton}
                    className={styles.filterButton}
                    filterState={filterButtonState}
                >
                    {
                        filterButtonState === FilterButtonState.Apply
                            ? <p>Применить фильтры </p>
                            : filterButtonState === FilterButtonState.Open
                                ? <p>Скрыть фиьтры</p>
                                :<p>Показать фильтры (2)</p>

                    }
                    <Image
                        className={styles.filterIcon}
                        src="/filter.svg"
                        alt="filter"
                        width={10}
                        height={16}
                    />
                </Button>

                {

                }
                <Button onClick={resetFilter}>Сбросить фильтры</Button>

                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Найти вакансию"
                        className={styles.searchInput}
                    />
                    <Button
                        className={styles.searchButton}
                    >

                        <Image
                            className={styles.searchIcon}
                            src="/search.svg"
                            alt="search"
                            width={20}
                            height={20}
                        />
                    </Button>
                </div>
            </div>
            <div className={styles.filterOptionWrapper}>
                {(filterButtonState === FilterButtonState.Open|| filterButtonState === FilterButtonState.Apply)
                    ? <FilterOptions />
                    : null}
            </div>
        </div>

    );
};

export default Filter;
