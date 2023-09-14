import styles from './tab.module.scss';
import classNames from 'classnames';
import { IAboutDataTabs } from '../../../../types/interfaces';

import { ReactElement } from 'react';
import { TabsBodyMobile } from '../TabsBodyMobile';

interface ITab {
  isActive: boolean;
  student: IAboutDataTabs;
  handleTabClick: () => void;
}

function Tab({ isActive, student, handleTabClick }: ITab): ReactElement {
  const stName = student.stName.split(' ')[0];
  const { textAbout } = student.body;

  return (
    <li className={classNames(styles.list__item, styles.item)}>
      <div className={classNames(styles.item__studentInfo, { [styles.isactive]: isActive })} onClick={handleTabClick}>
        <div className={styles.item__imgContainer}>
          <img className={styles.item__img} src={student.profilePicture} alt="Student" />
        </div>
        <h3 className={styles.item__title}>{student.stName}</h3>
        <div className={styles.item__role}>{student.role}</div>
        <div className={styles.item__tooltip}>{`About ${stName}`}</div>
      </div>
      <div className={classNames(styles.item__links, { [styles.isactive]: isActive })}>
        <a className={styles.item__links_github} href={student.github} target="blank">
          GitHub
        </a>
      </div>
      <TabsBodyMobile stName={stName} textAbout={textAbout} student={student} />
    </li>
  );
}

export default Tab;
