import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'

export function ColorLegend({colorClassNames}) {
  const itemEls = Object.entries(colorClassNames)
      .map(([className, description], idx) => (
        <li 
          className={clsx(className)} 
          key={idx}
        >
          {description}
        </li>
      ))
  return (
    <div className={clsx(
      styles.container, 
      'padding--md', 
      'padding-top--lg',
      'padding-right--lg'
    )}>
      <ul>
        {itemEls}
      </ul>
    </div>
  )
}
