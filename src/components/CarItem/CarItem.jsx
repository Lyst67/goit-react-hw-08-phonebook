import { BigButton } from 'components/BigButton/BigButton';
import css from './CarItem.module.css';
import sprite from '../assets/sprite.svg';

export const CarItem = () => {
  return (
    <div className={css.car_item}>
      <div className={css.car_img}>
        <svg className={css.icon_heart}>
          <use href={`${sprite}#heart`} />
        </svg>
        <img src="" alt="car" />
        <div className={css.car_name}>
          <h2>
            <span className={css.car_model}></span>
          </h2>
          <p></p>
        </div>
        <ul className={css.car_options}>
          <li>
            <span></span>
            <hr className={css.hr} />
            <span></span>
            <hr className={css.hr} />
            <span></span>
            <hr className={css.hr} />
            <span></span>
          </li>
          <li>
            <span></span>
            <hr className={css.hr} />
            <span></span>
            <hr className={css.hr} />
            <span></span>
            <hr className={css.hr} />
            <span></span>
          </li>
        </ul>
      </div>
      <BigButton>Learn more</BigButton>
    </div>
  );
};
