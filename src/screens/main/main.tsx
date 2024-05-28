import { Link, Outlet } from 'react-router-dom';

import classes from './main.module.scss';

export const Main = () => (
  <div className={classes.root}>
    <h1>Main Content</h1>

    <div className={classes.links}>
      <Link to="/admin">Admin</Link>
      <Link to="/menu">Menu</Link>
    </div>

    <Outlet />
  </div>
);
