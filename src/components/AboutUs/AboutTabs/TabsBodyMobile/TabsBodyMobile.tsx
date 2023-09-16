import { ReactElement } from 'react';
import { IAboutDataTabs } from '../../../../types/interfaces';
import { Description } from '../Description';

interface ITabsBodyMobile {
  stName: string;
  textAbout: string;
  student: IAboutDataTabs;
}
function TabsBodyMobile({ student }: ITabsBodyMobile): ReactElement {
  return <Description student={student} isMobile={true} isBtnShown={true} />;
}

export default TabsBodyMobile;
