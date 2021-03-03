import Head from 'next/head';
import { GetServerSideProps } from 'next'

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';


import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContex';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>

  )
}

// esta function realiza uma chama a API antes de renderizar o componente em tela.

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   // // chamada API 
//   // const user = {
//   //   level: 1,
//   //   currentExperience: 50,
//   //   challengesCompleted: 2,
//   // }

//   // // Tudo que esta nesta function é executado apenas no servidor Node e não no browser.
//   // console.log(user);

//   const { level, currentExperience, challengesCompleted } = ctx.req.cookies

//   return {
//     props: {
//       level,
//       currentExperience,
//       challengesCompleted,
//     }
//   };
// }

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

/*
  Back-end (Ruby)
  Next.js (Node.js)
  Front-end (React)

*/