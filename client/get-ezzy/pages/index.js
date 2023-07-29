import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { UserContext } from '../context/user-context';
import { useContext } from 'react';
import SignIn from './sign-in/sign-In';
import Dashboard from './dashboard/dashboard';

export default function Home() {
  const { isSignedin } = useContext(UserContext);
  
  let isFirstTime;
  useContext(() => {
    isFirstTime = localStorage.getItem('isFirstTime');
  });

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {
          !isSignedin ? <SignIn /> : <Dashboard />
        }
      </main>
    </div>
  )
}
