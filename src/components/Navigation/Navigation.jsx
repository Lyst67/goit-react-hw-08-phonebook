import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <Link className={css.nav_link} to={'/catalog'}>
        Catalog
      </Link>
      <Link className={css.nav_link} to={'/favorites'}>
        Favorites
      </Link>
    </nav>
  );
};
