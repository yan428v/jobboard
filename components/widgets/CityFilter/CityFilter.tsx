import React from 'react';
import Button from '../../shared/Button/Button';
import styles from './CityFilter.module.scss';

const CityFilter = () => {
    return (
        <div className={styles.cityFilter}>

            <Button>Все города</Button>
            <Button>Центр</Button>
            <Button>Север</Button>
            <Button>Юг</Button>
        </div>
    );
};

export default CityFilter;
