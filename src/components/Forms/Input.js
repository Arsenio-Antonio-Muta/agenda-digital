import React from 'react'

import styles from "./Input.module.css"

const Input = ({ type, label, name, placeholder, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <p className={styles.error}>{error}</p>
    </div>
  )
}

export default Input