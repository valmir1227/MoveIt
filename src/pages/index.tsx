import { CompletedChalleges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import Head from "next/head";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move.It Dev</title>
      </Head>


      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChalleges />
          <Countdown />
        </div>
      </section>
    </div>
  );
}
