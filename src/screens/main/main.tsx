import { Link, Outlet } from 'react-router-dom';

import image from '@/assets/images/react-1.webp';

import classes from './main.module.scss';

export const Main = () => (
  <div className={classes.root}>
    <h1>Main Content</h1>

    <img src={image} alt="react" />

    <div className={classes.links}>
      <Link to="/admin">Admin</Link>
      <Link to="/menu">Menu</Link>
    </div>

    <Outlet />
  </div>
);
