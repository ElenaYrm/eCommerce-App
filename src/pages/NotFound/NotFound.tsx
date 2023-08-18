import { ReactElement } from 'react';
import { PATH } from '../../router/constants/paths';
import { Page } from '../../router/types';
import { Link } from 'react-router-dom';

export default function NotFound(): ReactElement {
  return (
    <div>
      {/* <div className={nf_modal__container}>
        <h3 className={nf_modal__title}>Page not found (´•̥̥̥o•̥̥̥`)</h3>
        <div className={nf_modal__text}>That's sad... But you 
        know you are always welcome on the main page, right?</div> */}
      <Link to={PATH[Page.Home]}>Back to Home</Link>
      {/* </div> */}
    </div>
  );
}
