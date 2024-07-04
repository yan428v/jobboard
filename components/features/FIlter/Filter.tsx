'use client';

import Image from 'next/image';
import Button from '@/components/shared/Button/Button';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { FilterButtonState } from '@/lib/types/types';
import { setFilterButtonState } from '@/lib/redux/slice';
import FilterOptions from '../../widgets/FilterOptions/FilterOptions';
import styles from './Filter.module.scss';

const Filter = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const filterButtonState = useAppSelector((state) => state.filters.filterButtonState);
    const dispatch = useAppDispatch();
    const toggleFilterButton = () => {
        if (filterButtonState === FilterButtonState.Hide) {
            dispatch(setFilterButtonState(FilterButtonState.Open));
            console.log('Open');
        } else {
            dispatch(setFilterButtonState(FilterButtonState.Hide));
            console.log('Hide');
        }
        if (filterButtonState === FilterButtonState.Apply) {
            console.log('Apply');
        }
    };

    return (
        <div className={styles.filterBarWrapper}>
            <div className={styles.filterBar}>
                <Button
                    // isSelected={filterButtonState === FilterButtonState.Open}
                    isApply
                    onClick={toggleFilterButton}
                    className={styles.filterButton}
                >

                    <p>Показать фильтры (2)</p>
                    <Image
                        className={styles.filterIcon}
                        src="/filter.svg"
                        alt="filter"
                        width={10}
                        height={16}
                    />
                </Button>

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
                {/* <div className={`${styles.filterOptionWrapper} ${isOpen ? 'open' : ''}`}> */}
                {filterButtonState === FilterButtonState.Open && <FilterOptions />}
            </div>
        </div>

    );
};

export default Filter;
