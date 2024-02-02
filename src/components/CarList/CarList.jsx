import { CarItem } from 'components/CarItem/CarItem';
import css from './CarList.module.css';
import { nanoid } from 'nanoid';

export const CarList = ({ cars }) => {
  return (
    <div className={css.car_list}>
      {cars.map(car => (
        <CarItem key={nanoid()} carItem={car} />
      ))}
    </div>
  );
};
