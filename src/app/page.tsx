'use client';

import styles from './page.module.css';
import TestingUseReducer from './components/TestingUseReducer';
import { useState } from 'react';
import Container from './components/Container';

export default function Home() {
  const [displayContent, setDisplayContent] = useState('home');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {displayContent === 'home' && (
          <div className='buttons'>
            <button onClick={() => setDisplayContent('useReducer')}>
              {' '}
              useReducer
            </button>
          </div>
        )}

        {displayContent === 'useReducer' && (
          <Container backHome={() => setDisplayContent('home')}>
            <TestingUseReducer />
          </Container>
        )}
      </main>
    </div>
  );
}
