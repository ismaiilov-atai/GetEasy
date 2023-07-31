import PostItem from '../post-item/post-item';
import Navbar from '../navbar/navbar';
import styles from '../../styles/Dashboard.module.css';
import Items from '../items/items';
import React, { useState } from 'react';

export default function Dashboard() {

  const [isCreateItem, setIsCreateItem] = useState(false);


  return (
    <div className={styles.dashboard_container}>
      <Navbar setIsCreateItem={setIsCreateItem} />
      {
        !isCreateItem ? 
          <Items isOwnItems={false} />
          : <PostItem setIsCreateItem={setIsCreateItem} />
      }
    </div>
  )
}