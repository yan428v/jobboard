'use client';

import Button from '../../shared/Button/Button';
import styles from './DataFilter.module.scss';
import { useAppSelector, useAppDispatch } from '../../../lib/redux/hooks';
import { setDateFilter } from '../../../lib/redux/slice';

const DateFilter = () => {
    const selectedDate = useAppSelector((state) => state.filters.currentDate);
    const dispatch = useAppDispatch();

    const handleDateChange = (newDate: string) => {
        console.log('Изменение даты на: ', newDate);
        dispatch(setDateFilter(newDate));
    };
    return (
        <div className={styles.dateFilter}>
            <Button
                isSelected={selectedDate === 'allTime'}
                onClick={() => handleDateChange('allTime')}
            >
                Все время
            </Button>
            <Button
                isSelected={selectedDate === 'today'}
                onClick={() => handleDateChange('today')}
            >
                Сегодня
            </Button>
            <Button
                isSelected={selectedDate === 'week'}
                onClick={() => handleDateChange('week')}
            >
                За неделю
            </Button>
            <Button
                isSelected={selectedDate === 'month'}
                onClick={() => handleDateChange('month')}
            >
                За месяц
            </Button>
        </div>
    );
};

export default DateFilter;
