import { Page } from '../types';

const PAGE = {
  [Page.Home]: {
    path: '/',
    link: '/',
  },
  [Page.Login]: {
    path: Page.Login,
    link: `/${Page.Login}`,
  },
  [Page.Register]: {
    path: Page.Register,
    link: `/${Page.Register}`,
  },
  [Page.Profile]: {
    path: Page.Profile,
    link: `/${Page.Profile}`,
  },
  [Page.Cart]: {
    path: Page.Cart,
    link: `${Page.Cart}`,
  },
  [Page.NotFound]: {
    path: '*',
    link: `/${Page.NotFound}`,
  },
};

export default PAGE;
