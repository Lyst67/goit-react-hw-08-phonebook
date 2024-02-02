import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import { BigButton } from 'components/BigButton/BigButton';

const HomePage = () => {
  return (
    <section className={css.section}>
      <div className={css.home_container}>
        <h1 className={css.home_text}>Our cars are your freedom!</h1>
        <Link to={'catalog'}>
          <BigButton>Choose a car</BigButton>
        </Link>
      </div>
    </section>
  );
};
export default HomePage;
