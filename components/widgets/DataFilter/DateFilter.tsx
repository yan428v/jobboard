import React from 'react';
import Button from '../../shared/Button/Button';
import styles from './DataFilter.module.scss';

const DateFilter = () => {
    return (
        <div className={styles.dateFilter}>
            <Button>Все время</Button>
            <Button>Сегодня</Button>
            <Button>За неделю</Button>
            <Button>За месяц</Button>
        </div>
    );
};

export default DateFilter;
