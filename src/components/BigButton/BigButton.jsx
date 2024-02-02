import css from './BigButton.module.css';

export const BigButton = ({ children }) => {
  return (
    <>
      <button type="button" className={css.big_button}>
        {children}
      </button>
    </>
  );
};
