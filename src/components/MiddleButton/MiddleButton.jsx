import css from './MiddleButton.module.css';

export const MiddleButton = ({ children }) => {
  return (
    <>
      <button type="button" className={css.button}>
        {children}
      </button>
    </>
  );
};
