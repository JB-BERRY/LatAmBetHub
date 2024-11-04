// components/BoxContainer.tsx

import React from 'react';
import Image from 'next/image';
import styles from './MenuItem.module.css';

const BoxContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.icon}>
          <Image src="/icons/casino.svg" alt="Casino" width={40} height={40} />
        </div>
        <p>Casino</p>
      </div>
      <div className={styles.box}>
        <div className={styles.icon}>
          <Image src="/icons/betting.svg" alt="Betting" width={40} height={40} />
        </div>
        <p>Betting</p>
      </div>
      <div className={styles.box}>
        <div className={styles.icon}>
          <Image src="/icons/bingo.svg" alt="Bingo" width={40} height={40} />
        </div>
        <p>Bingo</p>
      </div>
      <div className={styles.box}>
        <div className={styles.icon}>
          <Image src="/icons/broker.svg" alt="Broker" width={40} height={40} />
        </div>
        <p>Broker</p>
      </div>
      <div className={styles.box}>
        <div className={styles.icon}>
          <Image src="/icons/poker.svg" alt="Poker" width={40} height={40} />
        </div>
        <p>Poker</p>
      </div>
      <div className={styles.box}>
        <div className={styles.icon}>
          <Image src="/icons/payment.svg" alt="Payments" width={40} height={40} />
        </div>
        <p>Payments</p>
      </div>
    </div>
  );
};

export default BoxContainer;
