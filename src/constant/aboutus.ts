import { IAboutDataTabs } from '../components/AboutUs/AboutTabs/types';

export const IMG_DEFAULT = '/images/ph-default.jpg';
export const SCHOOL_LINK = 'https://rs.school';
export const studentDataTabs: IAboutDataTabs[] = [
  {
    profilePicture: '/images/ph-elena.jpg',
    stName: 'Elena Yaroma',
    role: 'Front-end Developer',
    github: 'https://github.com/ElenaYrm',
    body: {
      textAbout:
        'First of all, I try to understand task and how certain things work and thanks to that I am a fast learner. I have 1 year experience as a Front-end developer and took part in 2 real projects during this time. My current stack: HTML, CSS, Sass, JavaScript, TypeScript, React, Redux, Webpack, Vite, Jest. I am a person who always wants to expand knowledge and experience. And my next steps are to find a job and expand my knowledge in React and Angular.',
      recommendations: [
        'Repository setup (Vite + React + TypeScript + Eslint + Jest)',
        'Github actions setup (tests and deploy on pull requests and merge)',
        'Work with the server SDK (Login/Register, Catalog, Cart)',
        'Store setting (Auth, Cart, User)',
        'Register form implementation (Addresses) + merge of all form parts together',
        'Catalog page implementation incl. Infinite scroll',
        'Work with React Testing Library',
      ],
    },
  },
  {
    profilePicture: '/images/ph-german.jpg',
    stName: 'German Gribanov',
    role: 'Front-end Developer',
    github: 'https://github.com/GermanGrib',
    body: {
      textAbout:
        'As Conrad Hilton said, "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don\'t quit." This was also true on our project; despite mistakes and misunderstandings, we kept moving forward, each person fulfilling their role. I consider myself fortunate to have had such a wonderful team in the final project. 99% of our successful work rests on their fragile, beautiful, feminine shoulders. I am convinced that success depends on the team.',
      recommendations: [
        'Work with the server SDK (Profile)',
        'Store setting (User)',
        'Login form implementation',
        'Profile page implementation incl. Tabs',
        'About page implementation',
        'Trello board setup',
        'Work with React Testing Library',
      ],
    },
  },
  {
    profilePicture: '/images/ph-nastia.jpg',
    stName: 'Nastia Piven',
    role: 'Front-end Developer',
    github: 'https://github.com/HereEast',
    body: {
      textAbout:
        'Being a designer in tech, the most often phrase that was smashed into my face was: "That\'s impossible to implement". Then I thought — wow, I also want to have this power and impact! So here I am learning JS and finishing this project on a tech stack I\'ve never used before: React, Redux, and Jest. Also, I am interested in creative dev and looking forward to working with WebGL/Three.js, GreenSock, Processing, and more. That is LOVE — the only thing that matters.',
      recommendations: [
        'Routing setup',
        'Register form implementation (User information) incl. Password checklist',
        'Work with the server SDK (Product)',
        'Store setting (Product, Catalog)',
        'Product page implementation incl. Slider',
        'Cart page implementation',
        'Project design',
        'Work with React Testing Library',
      ],
    },
  },
];
