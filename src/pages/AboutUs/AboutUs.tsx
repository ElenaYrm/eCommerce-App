import styles from './aboutUs.module.scss';
import { ReactElement } from 'react';
import { AboutTabs } from '../../components/AboutTabs';
import { TeamProcessList } from '../../components/TeamProcessList';
import { RSLogo } from './RSLogo';
import { teamworkText } from '../../constant/about-teamwork';

function AboutUs(): ReactElement {
  return (
    <div className={styles.root}>
      <div className={styles.root__container}>
        <AboutTabs />
      </div>
      <TeamProcessList content={teamworkText} />
      <RSLogo />
    </div>
  );
}

export default AboutUs;
