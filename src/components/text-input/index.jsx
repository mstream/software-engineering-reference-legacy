import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'

export function TextInput({
  label,
  id,
  onChange,
  value,
  ...otherProps
}) {
  const visibleValue = value != null ? value : 'LOADING...';
  const length = Math.max(label.length, visibleValue.length + 2)
  return (
    <div>
      <label htmlFor={id}>
        {visibleValue.length ? `${label}: ` : ''}
      </label> 
      <input
        {...otherProps}
        className={clsx(styles.input)}
        id={id}
        onChange={onChange}
        placeholder={label}
        size={Math.min(64, length)}
        type="text"
        value={visibleValue}
      />
    </div>
  );
}
