import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Mayank</h1>
        <p className={styles.description}>
          I'm a full-stack developer(frontend heavy) with 2 years of experience using React, Redux and Spring Boot. Reach out if you'd like to learn more!
        </p>
        <div>

        <a href="mailto:mayank.keshari.93@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="/resume/Mayank-Keshari-Resume.pdf" download className={styles.contactBtn}>
          Resume
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
