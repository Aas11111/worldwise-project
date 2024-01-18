import styles from "./Button.module.css";
import proptypes from "prop-types";
function Button({ children, onClick, type }) {
  // Button.propTypes = {
  //   children: proptypes.func.isRequired,
  //   onClick: proptypes.func,
  //   type: proptypes.func,
  // };

  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
