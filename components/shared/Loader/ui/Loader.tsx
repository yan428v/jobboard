import React from 'react';
import clsx from 'clsx';
import styles from './Loader.module.css';

const Loader = () => (
    <div className={clsx(styles['lds-ellipsis'])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default Loader;
