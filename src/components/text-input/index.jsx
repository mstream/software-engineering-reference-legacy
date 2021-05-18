import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'

export function TextInput(props) {
  const visibleValue = props.value != null ? props.value : 'LOADING...';
  const length = Math.max(props.label.length, visibleValue.length + 2)
  return (
    <div>
      <label htmlFor={props.id}>
        {visibleValue.length ? `${props.label}: ` : ''}
      </label> 
      <input
        {...props}
        className={clsx(styles.input)}
        id={props.id}
        onChange={props.onChange}
        placeholder={props.label}
        size={Math.min(64, length)}
        type="text"
        value={visibleValue}
      />
    </div>
  );
}
