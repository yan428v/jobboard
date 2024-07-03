'use client';

import React, { useState } from 'react';
import Button from '../../shared/Button/Button';
import styles from './DataFilter.module.scss';

const DateFilter = () => {
    console.log('рендер');
    const [selectedDate, setSelectedDate] = useState('week');
    const handleDateChange = (newDate:string) => {
        console.log('Изменение даты на: ', newDate);
        setSelectedDate(newDate);
    };
    return (
        <div className={styles.dateFilter}>
            <Button
                isSelected={selectedDate === 'all-time'}
                onClick={() => handleDateChange('all-time')}
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
