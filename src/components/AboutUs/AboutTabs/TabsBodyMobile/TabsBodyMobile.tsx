import { Dispatch, ReactElement, useState } from 'react';
import styles from './tabsBodyMobile.module.scss';
import classNames from 'classnames';
import { studentDataTabs } from '../../../../constant/aboutus';

interface ITabsBodyMobile {
  stName: string;
  textAbout: string;
  activeTab: number;
  isBtnShown: boolean;
  setIsBtnShown: Dispatch<React.SetStateAction<boolean>>;
}

function TabsBodyMobile({ setIsBtnShown, isBtnShown, stName, textAbout, activeTab }: ITabsBodyMobile): ReactElement {
  const [isHide, setIsHide] = useState(false);

  function handleHideBtn(): void {
    setIsHide(!isHide);
    setIsBtnShown(!isBtnShown);
  }

  return (
    <div className={classNames(styles.bodyMobile, { [styles.isNotHide]: !isHide })}>
      <h3 className={styles.bodyMobile__title}>About {stName}</h3>
      <div className={styles.bodyMobile__about}>{textAbout}</div>
      <div className={styles.bodyMobile__contributionContainer}>
        <div className={styles.bodyMobile__contribution}>{stName}'s Contribution</div>
        <ul>
          {studentDataTabs[activeTab].body.recommendations.map((recc, indx) => {
            return (
              <li className={styles.bodyMobile__item} key={indx}>
                {recc}
              </li>
            );
          })}
        </ul>
      </div>
      {!isHide && (
        <button className={styles.bodyMobile__hideBtn} onClick={handleHideBtn}>
          Hide About
        </button>
      )}
    </div>
  );
}

export default TabsBodyMobile;
