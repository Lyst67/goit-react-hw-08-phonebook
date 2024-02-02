import { ChooseForm } from 'components/ChooseForm/ChooseForm';
import css from './Favorite.module.css';
import { CarList } from 'components/CarList/CarList';

const cars = [{ a: '1' }, { b: '2' }, { c: '3' }, { d: '4' }];

const Favorite = () => {
  return (
    <section>
      <div className={css.favorite_container}>
        <ChooseForm />
        <CarList cars={cars} />
      </div>
    </section>
  );
};
export default Favorite;
