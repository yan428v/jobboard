import React from 'react';
import { setCityFilter } from '@/lib/redux/slice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import Button from '../../shared/Button/Button';
import styles from './CityFilter.module.scss';

const CityFilter = () => {
    const selectedCity = useAppSelector((state) => state.filters.currentCity);
    const dispatch = useAppDispatch();
    const handleCityChange = (newCity: string) => {
        console.log('Изменение города на: ', newCity);
        dispatch(setCityFilter(newCity));
    };

    return (

        <div className={styles.cityFilter}>
            <Button
                isSelected={selectedCity === 'allCountry'}
                onClick={() => handleCityChange('allCountry')}
            >
                Вся страна
            </Button>
            <Button
                isSelected={selectedCity === 'center'}
                onClick={() => handleCityChange('center')}
            >
                Центр
            </Button>
            <Button
                isSelected={selectedCity === 'north'}
                onClick={() => handleCityChange('north')}
            >
                Север
            </Button>
            <Button
                isSelected={selectedCity === 'south'}
                onClick={() => handleCityChange('south')}
            >
                Юг
            </Button>
        </div>
    );
};

export default CityFilter;
