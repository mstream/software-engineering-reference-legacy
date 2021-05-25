import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export function DropdownInput({
  activeValue, 
  className,
  id,
  label, 
  onValueSelected, 
  values, 
  ...otherProps
}) {
  const valueEls = values.map((value, idx) => {
    const isActive = value === activeValue;
    const prefix = isActive ? '✓' : ' ';
    return (
      <li key={idx}>
        <a 
          className={clsx('dropdown__link')}
          href={`#${id}`}
          onClick={() => onValueSelected(value)}
        >
          {`${prefix} ${value}`}
        </a>
      </li>
    )
  });

  return (
    <div
      {...otherProps}
      className={clsx('dropdown', 'dropdown--hoverable', className)}
      id={id}
    >
      <button className={clsx('button', 'button--primary')}>
        {`${label ? label + ': ' : ''}${activeValue}`}
      </button>
      <ul className={('dropdown__menu')}>
        {valueEls}  
      </ul>
    </div>
  )
}

DropdownInput.propTypes = {
  activeValue: PropTypes.oneOfType([
      PropTypes.string, 
      PropTypes.number,
  ]).isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  onValueSelected: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string, 
      PropTypes.number,
  ])).isRequired,
}
