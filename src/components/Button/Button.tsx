import { HTMLAttributes } from 'react'
import classNames from 'classnames'
import isEmpty from 'lodash/isEmpty';
import './Button.css'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'tertiary'
}

/**
 * A generic button to be used throughout the app.
 * 
 * @param props.variant The button variant. 
 * @returns {JSX.Element}
 */
export function Button(props: ButtonProps) {
    const { className, variant, ...htmlButtonProps } = props;
    const buttonClassName = classNames('app-button', className, {
        'tertiary': variant === 'tertiary' || isEmpty(variant)
    });

    return <button className={buttonClassName} {...htmlButtonProps} />
}