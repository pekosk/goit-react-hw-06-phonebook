import PropTypes from "prop-types";
import { memo } from "react";
import styles from "./ContactsItem.module.css";

const ContactItem = ({ id, name, number, onDelete }) => {
  const remove = () => onDelete(id);
  return (
    <li className={styles.contactItem}>
      <p>
        {name}: {number}
      </p>
      <button className={styles.btn} onClick={remove}>
        Delete
      </button>
    </li>
  );
};

export default memo(ContactItem);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};