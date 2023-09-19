import styles from './aboutUs.module.scss';
import { ReactElement } from 'react';
import { AboutTabs } from '../../components/AboutUs/AboutTabs';
import { TeamProcess } from '../../components/AboutUs/TeamProcess';
import { RSLogo } from '../../components/AboutUs/RSLogo';
import { teamworkText } from '../../constant/about-teamwork';

function AboutUs(): ReactElement {
  return (
    <div className={styles.root}>
      <div className={styles.root__container}>
        <AboutTabs />
      </div>
      <TeamProcess content={teamworkText} />
      <RSLogo />
    </div>
  );
}

export default AboutUs;
