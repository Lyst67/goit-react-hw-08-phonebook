import { ChooseForm } from 'components/ChooseForm/ChooseForm';
import css from './Cars.module.css';
import { CarList } from 'components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectIsError,
  selectIsLoading,
} from 'redux/cars/carSelectors';
import { useEffect } from 'react';
import { fetchCars } from 'redux/cars/operations';

const cars = [{ a: '1' }, { b: '2' }, { c: '3' }, { d: '4' }];
const Cars = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const carList = useSelector(selectCars);
  console.log(isLoading);
  console.log(isError);
  console.log(carList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <section>
      <div className={css.cars_container}>
        <ChooseForm />
        <CarList cars={cars} />
      </div>
    </section>
  );
};
export default Cars;
