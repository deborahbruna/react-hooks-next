'use client';

import styles from './page.module.css';
import TestingUseReducer from './components/TestingUseReducer';
import { useState } from 'react';
import Container from './components/Container';
import { TestingUseRef } from './components/TestingUseRef';

export default function Home() {
  const [displayContent, setDisplayContent] = useState('home');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {displayContent === 'home' && (
          <div className='buttons'>
            <button onClick={() => setDisplayContent('useReducer')}>
              useReducer
            </button>
            <button onClick={() => setDisplayContent('useRef')}>useRef</button>
          </div>
        )}

        {displayContent !== 'home' && (
          <Container backHome={() => setDisplayContent('home')}>
            {displayContent === 'useReducer' && <TestingUseReducer />}
            {displayContent === 'useRef' && <TestingUseRef />}
          </Container>
        )}
      </main>
    </div>
  );
}
