import styles from './aboutTabs.module.scss';

import { ReactElement, useState } from 'react';
import { studentDataTabs } from '../../../constant/aboutus';
import { TabsBody } from './TabsBody';
import classNames from 'classnames';

function AboutTabs(): ReactElement {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = function (index: number): void {
    setActiveTab(index);
  };

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {studentDataTabs.map((student, ind) => {
          const stName = student.stName.split(' ')[0];
          const { textAbout } = student.body;
          const isActive = activeTab === ind;
          return (
            <li key={ind} className={classNames(styles.list__item, styles.item)}>
              <div
                className={classNames(styles.item__studentInfo, { [styles.isactive]: isActive })}
                onClick={(): void => handleTabClick(ind)}
              >
                <img className={styles.item__img} src={student.profilePicture} alt="picture of student" />
                <h3 className={styles.item__title}>{student.stName}</h3>
                <div className={styles.item__role}>{student.role}</div>
              </div>
              <div className={classNames(styles.item__links, { [styles.isactive]: isActive })}>
                <a className={styles.item__links_github} href={student.github} target="blank">
                  GitHub
                </a>
                <button className={styles.item__showBtn}>Show about</button>
              </div>

              <div className={styles.bodyMobile}>
                <h3>About {stName}</h3>
                <div>{textAbout}</div>
                <div>
                  <div>{stName}'s Contribution</div>
                  <ul>
                    {studentDataTabs[activeTab].body.recommendations.map((recc, indx) => {
                      return <li key={indx}>{recc}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <TabsBody activeTabIndex={activeTab} />
    </div>
  );
}

export default AboutTabs;
