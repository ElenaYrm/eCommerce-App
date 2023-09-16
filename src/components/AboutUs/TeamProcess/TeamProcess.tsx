import { ReactElement } from 'react';

import styles from './teamProcess.module.scss';

function TeamProcess(): ReactElement {
  return (
    <div className={styles.root}>
      <h3 className={styles.root__title}>Teamwork & Process</h3>
      <p className={styles.root__paragraph}>
        Hey! We are a team of 3 developers, who has been working on this project for the past 7 weeks. We did our best
        to plan carefully, work collaboratively, execute carefully and deliver visually appealing and user-friendly
        interface for this e-commerce solution.
      </p>
      <p className={styles.root__paragraph}>
        Let's have a look at our workflow and what approaches we used to make them work for our team.
      </p>
      <h4 className={styles.root__subtitle}>Project Kickoff</h4>
      <p className={styles.root__paragraph}>
        We did this meeting right before Sprint 1 started. The team gathered to understand the project's objectives,
        scope and requirements. We discussed tech stack, planning tools and individual thoughts and suggestions on the
        basic process.
      </p>
      <p className={styles.root__paragraph}>Actually, we needed more than one kickoff.</p>
    </div>
  );
}

export default TeamProcess;
