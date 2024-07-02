import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss'; // Импорт стилей как модуля

type ButtonProps = {
    size?: 'l-button' | 'm-button'; // Определение допустимых значений для size
    className?: string;
    children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
    size = 'm-button',
    className,
    children,
}) => (
    <button
        type="button"
        className={clsx(
            styles.button,
            styles[`button-${size}`],
            className,
        )}
    >
        {children}
    </button>
);

export default Button;
