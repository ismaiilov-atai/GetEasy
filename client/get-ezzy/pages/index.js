import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { UserContext } from './context/user-context';
import { useContext, useEffect } from 'react';

export default function Home() {

  const userState = useContext(UserContext);
  

  console.log(userState, ' userstate ');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      
        this is crazzy
      </header>
      <main>
        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
