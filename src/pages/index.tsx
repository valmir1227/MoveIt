import { CompletedChalleges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import Head from "next/head";
import { ChallengeBox } from "../components/challengeBox";

import styles from "../styles/pages/Home.module.css";
import { CountDownProvider } from "../contexts/CountDownContext";

export default function Home() {
  return (
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
  );
}
