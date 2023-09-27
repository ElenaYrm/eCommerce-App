import styles from './aboutTabs.module.scss';

import { ReactElement, useState } from 'react';
import { studentDataTabs } from '../../constant/aboutus.ts';
import { Description } from './Description';
import { Tab } from './Tab';

function AboutTabs(): ReactElement {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = function (index: number): void {
    setActiveTab(index);
  };

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {studentDataTabs.map((student, ind) => {
          const isActive = activeTab === ind;
          return (
            <Tab key={ind} student={student} isActive={isActive} handleTabClick={(): void => handleTabClick(ind)} />
          );
        })}
      </ul>
      <Description student={studentDataTabs[activeTab]} isMobile={false} />
    </div>
  );
}

export default AboutTabs;
