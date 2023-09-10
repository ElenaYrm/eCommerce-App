import styles from './aboutTabs.module.scss';

import { ReactElement, useState } from 'react';
import { studentDataTabs } from '../../../constant/aboutus';
import { TabsBody } from './TabsBody';
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
            <Tab
              student={student}
              isActive={isActive}
              handleTabClick={handleTabClick}
              ind={ind}
              activeTab={activeTab}
            />
          );
        })}
      </ul>
      <TabsBody activeTabIndex={activeTab} />
    </div>
  );
}

export default AboutTabs;
