import React from 'react';
import css from './ChooseForm.module.css';
import { Button } from 'components/Button/Button';

const options = [
  { value: 'buick', label: 'Buick' },
  { value: 'volvo', label: 'Volvo' },
  { value: 'hummer', label: 'Hummer' },
  { value: 'subaru', label: 'Subaru' },
  { value: 'mitsubishi', label: 'Mitsubishi' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'lincoln', label: 'Lincoln' },
  { value: 'gmc', label: 'GMC' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'enter', label: 'Enter the text' },
];
const optionPrice = [{ value: 'to', label: 'To $' }];

const handleSubmit = () => {};

export const ChooseForm = () => {
  return (
    <>
      <div>
        <form className={css.search_form} onSubmit={handleSubmit}>
          <div className={css.search_inputs}>
            <label className={css.select_label}>
              Car brand
              <select className={css.select} name="cars" defaultValue="enter">
                {options.map(({ value, label }) => (
                  <option className={css.option} key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label className={css.select_label}>
              Price/ 1 hour
              <select
                className={`${css.select} ${css.select_price}`}
                name="price"
                defaultValue="to"
              >
                {optionPrice.map(({ value, label }) => (
                  <option className={css.option} key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <div className={css.last_inputs}>
              <label className={css.form_label}>
                Сar mileage / km
                <div className={css.input_wrap}>
                  <div className={css.input_place}>From</div>
                  <input
                    className={css.form_input}
                    type="text"
                    name="price"
                    required
                  />
                </div>
              </label>
              <label className={css.form_label}>
                <div className={css.input_wrap}>
                  <div className={css.input_place}>To</div>
                  <input
                    className={`${css.form_input} ${css.second}`}
                    type="text"
                    name="price"
                    required
                  />
                </div>
              </label>
            </div>
            <Button>Search</Button>
          </div>
        </form>
      </div>
    </>
  );
};
