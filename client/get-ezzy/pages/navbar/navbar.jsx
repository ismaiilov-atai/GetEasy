import React from 'react';
import styles from '../../styles/Navbar.module.css';


export default function Navbar({ setIsCreateItem }) {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.brand_logo}></div>
      <div className={styles.button_container}>
        <ul>
          <li onClick={() => setIsCreateItem(false)}>my items</li>
          <li onClick={() => setIsCreateItem(true)}>create item</li>
        </ul>
      </div>
    </div>
  )
}