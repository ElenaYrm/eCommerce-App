import styles from './description.module.scss';
import { IAboutDataTabs } from '../../../../types/interfaces';
import { ReactElement } from 'react';
import classNames from 'classnames';

interface IDescription {
  student: IAboutDataTabs;
  isMobile: boolean;
}

function Description({ student, isMobile }: IDescription): ReactElement {
  const myName = student.stName.split(' ')[0];
  const textAbout = student.body.textAbout;

  return (
    <div className={isMobile ? classNames(styles.bodyMobile, { [styles.isNotHide]: isMobile }) : styles.root}>
      <h3 className={isMobile ? styles.bodyMobile__title : styles.root__title}>About {myName}</h3>
      <div className={isMobile ? styles.bodyMobile__about : styles.root__about}>{textAbout}</div>
      <div className={isMobile ? styles.bodyMobile__contributionContainer : styles.root__contribution}>
        <div className={isMobile ? styles.bodyMobile__contribution : styles.root__contributionTitle}>
          {myName}'s Contribution
        </div>
        <ul>
          {student.body.recommendations.map((recc, indx) => {
            return (
              <li className={isMobile ? styles.bodyMobile__item : styles.root__item} key={indx}>
                {recc}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Description;
