import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link to='/'>Pawsible</Link></div>
      <nav>
        <ul>
          <li>
            <Link to='/how-it-works'>How It Works</Link>
          </li>
          <li>
            <Link to='/data'>Data</Link>
          </li>
          <li>
            <Link to='/get-started'>Get Started</Link>
          </li>
          <li>
            <Link to='/sign-in'>Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;