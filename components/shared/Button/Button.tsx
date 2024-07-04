import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss'; // Импорт стилей как модуля

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    // size?: 'l-button' | 'm-button'; // Определение допустимых значений для size
    className?: string;
    children?: React.ReactNode;
    isSelected?: boolean;
    onClick?: ()=>void;
    isApply?:boolean
};

const Button: React.FC<ButtonProps> = ({
    // size = 'm-button',
    className,
    children,
    isSelected,
    onClick, isApply
}) => (
    <button
        onClick={onClick}
        type="button"
        className={clsx(
            styles.button,
            // styles[`button-${size}`],
            className,
            { [styles['button-selected']]: isSelected },
            { [styles['button-apply']]: isApply },
        )}
    >
        {children}
    </button>
);

export default Button;
