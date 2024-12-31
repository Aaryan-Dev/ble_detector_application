import {Login, Home, Classes, Students, Profile} from 'pages';

export const allRoutes = [
  {
    key: 1,
    name: 'Home',
    component: Home,
    options: {headerShown: false},
  },
  {
    key: 2,
    name: 'Login',
    component: Login,
    options: {headerShown: false},
  },
  {
    key: 3,
    name: 'Classes',
    component: Classes,
    options: {headerShown: false},
  },
  {
    key: 4,
    name: 'Students',
    component: Students,
    options: {headerShown: false},
  },
  {
    key: 5,
    name: 'Profile',
    component: Profile,
    options: {headerShown: false},
  },
];
