import { studentDataTabs } from '../../../../constant/aboutus';
import styles from './tabsBody.module.scss';
import { ReactElement } from 'react';

interface ITabsBody {
  activeTabIndex: number;
}

function TabsBody({ activeTabIndex }: ITabsBody): ReactElement {
  const myName = studentDataTabs[activeTabIndex].stName.split(' ')[0];
  const textAbout = studentDataTabs[activeTabIndex].body.textAbout;

  return (
    <div className={styles.root}>
      <h3 className={styles.root__title}>About {myName}</h3>
      <div className={styles.root__about}>{textAbout}</div>
      <div className={styles.root__contribution}>
        <div className={styles.root__contributionTitle}>{myName}'s Contribution</div>
        <ul>
          {studentDataTabs[activeTabIndex].body.recommendations.map((recc, indx) => {
            return (
              <li className={styles.root__item} key={indx}>
                {recc}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TabsBody;
