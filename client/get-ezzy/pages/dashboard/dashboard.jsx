import PostItem from '../post-item/post-item';
import Navbar from '../navbar/navbar';
import styles from '../../styles/Dashboard.module.css';
import React, { useState } from 'react';

export default function Dashboard() {

  const [isCreateItem, setIsCreateItem] = useState(false);


  return (
    <div className={styles.dashboard_container}>
      <Navbar setIsCreateItem={setIsCreateItem} />
      {
        !isCreateItem ? 
          <div>
            one two three
          </div>
          : <PostItem />
      }
    </div>
  )
}