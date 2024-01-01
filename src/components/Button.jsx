import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  Button.propTypes = {
    children,
    onClick,
    type,
  };

  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
