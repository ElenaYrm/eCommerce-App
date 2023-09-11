import { Dispatch, ReactElement } from 'react';
import styles from './tabsBodyMobile.module.scss';
import { IAboutDataTabs } from '../../../../types/interfaces';
import { Description } from '../Description';

interface ITabsBodyMobile {
  stName: string;
  textAbout: string;
  isBtnShown: boolean;
  setIsBtnShown: Dispatch<React.SetStateAction<boolean>>;
  student: IAboutDataTabs;
}

function TabsBodyMobile({ setIsBtnShown, isBtnShown, student }: ITabsBodyMobile): ReactElement {
  function handleHideBtn(): void {
    setIsBtnShown(!isBtnShown);
  }

  return (
    <>
      <Description student={student} isMobile={true} isBtnShown={isBtnShown} />
      {isBtnShown && (
        <button className={styles.bodyMobile__hideBtn} onClick={handleHideBtn}>
          Hide About
        </button>
      )}
    </>
  );
}

export default TabsBodyMobile;
