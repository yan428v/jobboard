// 'use client';
//
// import Button from '../../shared/Button/Button';
// import styles from './DataFilter.module.scss';
// import { useAppSelector, useAppDispatch } from '../../../lib/hooks/hooks';
// import { setDateFilter } from '../../../lib/redux/slice';
//
// const DateFilter = () => {
//     console.log('рендер');
//     const selectedDate = useAppSelector((state) => state.dateFilter.currentDate);
//     const dispatch = useAppDispatch();
//
//     const handleDateChange = (newDate: string) => {
//         console.log('Изменение даты на: ', newDate);
//         dispatch(setDateFilter(newDate));
//     };
//     return (
//         <div className={styles.dateFilter}>
//             <Button
//                 isSelected={selectedDate === 'all-time'}
//                 onClick={() => handleDateChange('all-time')}
//             >
//                 Все время
//             </Button>
//             <Button
//                 isSelected={selectedDate === 'today'}
//                 onClick={() => handleDateChange('today')}
//             >
//                 Сегодня
//             </Button>
//             <Button
//                 isSelected={selectedDate === 'week'}
//                 onClick={() => handleDateChange('week')}
//             >
//                 За неделю
//             </Button>
//             <Button
//                 isSelected={selectedDate === 'month'}
//                 onClick={() => handleDateChange('month')}
//             >
//                 За месяц
//             </Button>
//         </div>
//     );
// };
//
// export default DateFilter;

'use client';

import React from 'react';
import Button from '../../shared/Button/Button';
import styles from './DataFilter.module.scss';
import { useAppSelector, useAppDispatch } from '../../../lib/hooks/hooks';
import { setDateFilter } from '../../../lib/redux/slice';

const DateFilter = () => {
    console.log('рендер');
    const selectedDate = useAppSelector((state) => state.dateFilter.currentDate);
    const dispatch = useAppDispatch();

    const handleDateChange = (newDate:string) => {
        console.log('Изменение даты на: ', newDate);
        dispatch(setDateFilter(newDate));
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
