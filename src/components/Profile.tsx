import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContex';

import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/tava1.png" alt="Gustavo Santos" />
      <div>
        <strong>Gustavo Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}