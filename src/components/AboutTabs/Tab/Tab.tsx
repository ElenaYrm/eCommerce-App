import { ReactElement, SyntheticEvent } from 'react';
import classNames from 'classnames';
import { Description } from '../Description';
import { IMG_DEFAULT } from '../../../constant/aboutus.ts';
import { IAboutDataTabs } from '../types';

import styles from './tab.module.scss';

interface ITab {
  isActive: boolean;
  student: IAboutDataTabs;
  handleTabClick: () => void;
}

function Tab({ isActive, student, handleTabClick }: ITab): ReactElement {
  const stName = student.stName.split(' ')[0];

  return (
    <li className={classNames(styles.list__item, styles.item)}>
      <div className={classNames(styles.item__studentInfo, { [styles.isactive]: isActive })} onClick={handleTabClick}>
        <div className={styles.item__imgContainer}>
          <img
            className={styles.item__img}
            src={student.profilePicture}
            alt={`Photo of ${student.stName}`}
            onError={(e: SyntheticEvent<HTMLImageElement, Event>): void => {
              const target = e.target;
              if (target instanceof HTMLImageElement) {
                target.src = IMG_DEFAULT;
              }
            }}
          />
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
      <Description student={student} isMobile={true} />
    </li>
  );
}

export default Tab;
