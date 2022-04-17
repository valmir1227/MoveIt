import Head from "next/head";
import { CompletedChalleges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDownProvider } from "../contexts/CountDownContext";
import { GetServerSideProps } from "next";

import styles from "../styles/pages/Home.module.css";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
export default function Home(props: HomeProps) {
  console.log(props);

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Move.It Dev</title>
        </Head>

        <ExperienceBar />
        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChalleges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
