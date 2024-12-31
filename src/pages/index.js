import { lazy } from 'react';

export const Login =  lazy(() => import('./Login/Login.tsx'));
export const Classes = lazy(() => import('./Classes/Classes.tsx'));
export const Home = lazy(() => import('./Home/Home.tsx'));
export const Profile = lazy(() => import('./Profile/Profile.tsx'));
export const Students = lazy(() => import('./Students/Students.tsx'));