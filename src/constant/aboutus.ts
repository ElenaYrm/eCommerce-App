import { IAboutDataTabs } from '../types/interfaces';

export const studentDataTabs: IAboutDataTabs[] = [
  {
    profilePicture: '/public/images/ava.jpg',
    stName: 'Elena Yaroma',
    role: 'Front-end Developer',
    github: 'gitLinkCheck',
    body: {
      textAbout:
        'We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and is updated as the game progresses.',
      recommendations: [
        'Repository setup (Vite + React + TypeScript + Eslint + Jest)',
        'Github actions setup (tests and deploy on pull requests and merging)',
        'Working with the server through SDK (login/register, catalog, cart)',
        'Store setting (auth, cart, user)',
        'Register form implementation (addresses part) and collecting all forms together',
        'Catalog page implementation with infinite scroll',
      ],
    },
  },
  {
    profilePicture: '/public/images/ava.jpg',
    stName: 'German Gribanov',
    role: 'Front-end Developer',
    github: 'gitLinkCheck',
    body: {
      textAbout:
        'We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and is updated as the game progresses.',
      recommendations: [
        'Trello board setup',
        'Working with the server through SDK (profile)',
        'Store setting (user)',
        'Login form implementation',
        'Profile page implementation with tabs',
        'About us page implementation',
      ],
    },
  },
  {
    profilePicture: '/public/images/ava.jpg',
    stName: 'Nastia Piven',
    role: 'Front-end Developer',
    github: 'gitLinkCheck',
    body: {
      textAbout:
        'We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and is updated as the game progresses.',
      recommendations: [
        'Working with the server through SDK (product)',
        'Store setting (product, catalog)',
        'Routing setup',
        'Register form implementation (user information part) with checking password field',
        'Product page implementation with slider',
        'Cart page implementation',
        'Project design',
      ],
    },
  },
];
