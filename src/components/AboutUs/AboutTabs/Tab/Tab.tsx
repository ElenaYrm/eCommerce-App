import styles from './tab.module.scss';
import classNames from 'classnames';
import { IAboutDataTabs } from '../../../../types/interfaces';
import { StickyPopup } from '../../../shared/StickyPopup';

import { ReactElement, useState } from 'react';
import { TabsBodyMobile } from '../TabsBodyMobile';

interface ITab {
  isActive: boolean;
  student: IAboutDataTabs;
  handleTabClick: (ind: number) => void;
  ind: number;
  activeTab: number;
}

function Tab({ isActive, student, handleTabClick, ind, activeTab }: ITab): ReactElement {
  const [isBtnShown, setIsBtnShown] = useState(true);
  const stName = student.stName.split(' ')[0];
  const { textAbout } = student.body;

  return (
    <li key={ind} className={classNames(styles.list__item, styles.item)}>
      <div
        className={classNames(
          styles.item__studentInfo,
          { [styles.isactive]: isActive },
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
      <div
        className={classNames(
          styles.item__links,
          { [styles.isactive]: isActive },
          { [styles.mobileActive]: isBtnShown },
        )}
      >
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
}

export default Tab;
