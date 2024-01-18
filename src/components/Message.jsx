import styles from "./Message.module.css";
import proptypes from "prop-types";
function Message({ message }) {
  // Message.propTypes = {
  //   message,
  // };
  Message.propTypes = {
    message: proptypes.string.isRequired,
  };
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
