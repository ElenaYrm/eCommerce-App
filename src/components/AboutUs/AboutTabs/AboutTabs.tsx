import styles from './aboutTabs.module.scss';

import { ReactElement, useState } from 'react';
import { studentDataTabs } from '../../../constant/aboutus';
import { TabsBody } from './TabsBody';
import classNames from 'classnames';
import { StickyPopup } from '../../shared/StickyPopup';
import { TabsBodyMobile } from './TabsBodyMobile';

function AboutTabs(): ReactElement {
  const [activeTab, setActiveTab] = useState(0);
  const [isBtnShown, setIsBtnShown] = useState(true);

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
                className={classNames(
                  styles.item__studentInfo,
                  { [styles.isactive]: isActive && isBtnShown },
                  { [styles.isShown]: isBtnShown },
                )}
                onClick={(): void => handleTabClick(ind)}
              >
                <div className={styles.item__imgContainer}>
                  <img className={styles.item__img} src={student.profilePicture} alt="picture of student" />
                  <StickyPopup text={student.stName} />
                </div>
                <h3 className={styles.item__title}>{student.stName}</h3>
                <div className={styles.item__role}>{student.role}</div>
              </div>
              <div className={classNames(styles.item__links, { [styles.isactive]: isActive })}>
                <a className={styles.item__links_github} href={student.github} target="blank">
                  GitHub
                </a>
                {!isBtnShown && (
                  <button className={styles.item__showBtn} onClick={(): void => setIsBtnShown(!isBtnShown)}>
                    Show about
                  </button>
                )}
              </div>
              <TabsBodyMobile
                isBtnShown={isBtnShown}
                setIsBtnShown={setIsBtnShown}
                activeTab={activeTab}
                stName={stName}
                textAbout={textAbout}
              />
            </li>
          );
        })}
      </ul>
      <TabsBody activeTabIndex={activeTab} />
    </div>
  );
}

export default AboutTabs;
