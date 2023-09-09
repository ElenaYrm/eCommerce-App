import styles from './aboutUs.module.scss';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { selectUserLoadingInfo } from '../../store/user/selectors';
import { Loader } from '../../components/shared/Loader';
import { ErrorMessage } from '../../components/shared/ErrorMessage';
import { AboutTabs } from '../../components/AboutUs/AboutTabs';
import { TeamProcess } from '../../components/AboutUs/TeamProcess';
import { RSLogo } from '../../components/AboutUs/RSLogo';

function AboutUs(): ReactElement {
  const { status, error } = useSelector(selectUserLoadingInfo);

  return (
    <div className={styles.root}>
      {status === 'loading' && <Loader />}
      {error && <ErrorMessage text={error} />}

      {/* {status === 'success' && !error && ( */}
      <div className={styles.root__container}>
        {/* <Tabs /> */}
        <AboutTabs />
      </div>
      <TeamProcess />
      <RSLogo />
      {/* )} */}
    </div>
  );
}

export default AboutUs;
