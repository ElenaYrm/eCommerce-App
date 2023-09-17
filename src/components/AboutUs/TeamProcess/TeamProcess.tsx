import { ReactElement } from 'react';

import styles from './teamProcess.module.scss';

function TeamProcess(): ReactElement {
  return (
    <div className={styles.root}>
      <h3 className={styles.root__title}>Teamwork & Process</h3>
      <p className={styles.root__paragraph}>
        Hey! We are the team who has been working on this project for the past 7 weeks. We did our best to plan
        carefully, work collaboratively and execute meticulously to deliver visually appealing and user-friendly
        e-commerce web application.
      </p>
      <p className={styles.root__paragraph}>
        Let's have a look at our workflow and what approaches we used to make them work for our team.
      </p>
      <h4 className={styles.root__subtitle}>Project Kickoff</h4>
      <p className={styles.root__paragraph}>
        We did this meeting right before Sprint 1 started. The goal was to understand the project’s scope and
        requirements, as well as each others thoughts and expectations. We discussed tech stack, collaborative tools and
        shared ideas about the workflow and communication. Also we took time to agree on the project’s topic.
      </p>
      <p className={styles.root__paragraph}>We needed more than one call to cover all questions.</p>
      <p className={styles.root__paragraph}>
        <span>Result:</span> tech stack, collaborative tools, basic workflow and the topic are agreed on and approved.
      </p>
      <h4 className={styles.root__subtitle}>Sprint Planning</h4>
      <p className={styles.root__paragraph}>Every sprint started with 2 planning meetings.</p>
      <p className={styles.root__paragraph}>
        The first one was a high-level overview of the sprint’s requirements. The requirements were split into
        functional parts, which were assigned to each team member to carefully research, and then share the knowledge
        and implementation ideas with the rest of the team. This was our homework for the next planning meeting.
      </p>
      <p className={styles.root__paragraph}>
        The second meeting was a brief presentation of what we learned while doing the homework, and a discussion of how
        each of us planned to implement the assigned features.
      </p>
      <p className={styles.root__paragraph}>
        <span>Result:</span> Miro board with research and plan, Trello board with assigned tasks for the sprint, new
        GitHub sprint branch.
      </p>
      <h4 className={styles.root__subtitle}>Daily stand-ups</h4>
      <p className={styles.root__paragraph}>
        Daily stand-ups were our regular routine to track progress, address challenges, and adjust priorities. It was a
        great opportunity to keep up with everybody’s work, get help if needed and just make sure that all are safe and
        sane.
      </p>
      <p className={styles.root__paragraph}>
        <span>Result:</span> regular support and progress updates are shared.
      </p>
      <h4 className={styles.root__subtitle}>Development</h4>
      <p className={styles.root__paragraph}>
        By this phase, everybody knew exactly what their scope for the current sprint was and where to start.
      </p>
      <p className={styles.root__paragraph}>
        So we just followed the flow: 1) break the assigned feature into manageable chunks, 2) create a new branch, 3)
        code with love, care and attention to details, 4) commit, 5) push, 6) pull request
      </p>
      <p className={styles.root__paragraph}>
        After review — approve — merge, repeat with a new branch for another feature.
      </p>
      <p className={styles.root__paragraph}>
        <span>Result:</span> pull request is pulled.
      </p>
      <h4 className={styles.root__subtitle}>Review</h4>
      <p className={styles.root__paragraph}>
        We agreed, that any Pull Request should have been reviewed within a day max. We used GitHub to address issues
        and questions. If needed switched to Discord for further conversation. When all issues are solved — approve,
        merge.
      </p>
      <p className={styles.root__paragraph}>
        Nobody worked with resolving conflicts before, so for the first conflict we had a group call to share this
        magical experience.
      </p>
      <p className={styles.root__paragraph}>
        <span>Result:</span> new feature is merged.
      </p>
      <h4 className={styles.root__subtitle}>Sprint Closure & Deploy</h4>
      <p className={styles.root__paragraph}>
        Before every deploy we planned a final meeting for the current sprint. Together we went through all sprint
        requirements and acceptance criteria, clicked through the user flow and the cross-check flow. Then, deploy — and
        move to the next sprint.
      </p>
      <p className={styles.root__paragraph}>
        <span>Result:</span> sprint functionality is implemented and deployed.
      </p>
      <h4 className={styles.root__subtitle}>Design</h4>
      <p className={styles.root__paragraph}>
        The design was made on demand taking into account designer’s workload and inspiration. There was no process in
        there — pure chaos and pain.
      </p>
      <h4 className={styles.root__subtitle}>Collaborative Tools</h4>
      <p className={styles.root__paragraph}>GitHub, Discord, Trello, Miro</p>
    </div>
  );
}

export default TeamProcess;
