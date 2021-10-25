import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h2>Hi there! 👋</h2>
      <div className={styles.paragraph}>
        <p>
          My name is Santiago, I'm 27 and I'm looking for my first job in IT.
        </p>
        <p>
          In my previous jobs I was Motion Grapher and Designer but while trying
          to find some course to specialize in I came across Javascript. From
          that moment I decided to give a new direction to my profession and
          began to learn web development and programming.
        </p>
        <p>
          For this reason, I took a 5 months bootcamp focused on fullstack
          development, where I learned React, Redux, NodeJS, SQL and agile
          methodologies like SCRUM and Jira.
        </p>
        <p>
          Now I want to become a developer, combining my experience and
          programming, and in the future I would love to learn about AI and Data
          Science.
        </p>

        <div>
          <h4>Check out my social media!</h4>
          <div className={styles.containerSocialMedia}>
            <a
              href='https://www.linkedin.com/in/santiagoveiga46/'
              target='_blank'
              className={styles.socialMedia}
              rel='noreferrer'
            >
              My LinkedIn
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/santiagoveiga46/'
              className={styles.socialMedia}
              rel='noreferrer'
            >
              My Github
            </a>
            <a
              target='_blank'
              href='https://santiagoveiga.vercel.app/'
              className={styles.socialMedia}
              rel='noreferrer'
            >
              My Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
