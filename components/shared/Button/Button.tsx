import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss'; // Импорт стилей как модуля

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children?: React.ReactNode;
    isSelected?: boolean;
    onClick?: ()=>void;
    filterState?:string
};

const Button: React.FC<ButtonProps> = ({
    className,
    children,
    isSelected,
    onClick,
    filterState,

}) => (
    <button
        onClick={onClick}
        type="button"
        className={clsx(
            styles.button,
            className,
            { [styles['button-selected']]: isSelected },
            {
                [styles['button-apply']]: filterState === 'apply',
                [styles['button-open']]: filterState === 'open',
                [styles['']]: filterState === 'hide',
            },
        )}
    >
        {children}
    </button>
);

export default Button;
