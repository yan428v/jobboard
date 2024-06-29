import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss'; // Импорт стилей как модуля

type ButtonProps = {
    size?: 'large' | 'medium'; // Определение допустимых значений для size
    className?: string;
    children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ size = 'medium', className, children }) => (
    <button
        type="button"
        className={clsx(styles.button, styles[`button-${size}`], className)} // Использование модульных классов
    >
        {children}
    </button>
);

export default Button;
