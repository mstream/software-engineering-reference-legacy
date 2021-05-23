import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'

export function SandboxBody({children}) {
  return (
    <div className={clsx("card__body")}>
      {children}
    </div>
  )
}

export function SandboxControls({children}) {
  return (
    <div className={clsx("card__footer", styles.controlsContainer)}>
      <hr/>
      {children}
    </div>
  )
}

export function Sandbox({children, title}) {
  return (
    <div className={clsx(styles.container, "margin--md", "card")}>
      <div className={clsx("card__header")}>
        <h3>{title}</h3>
        <hr/>
      </div>
        {children}
    </div>
  )
}
