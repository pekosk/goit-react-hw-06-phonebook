import PropTypes from "prop-types";
import { memo } from "react";
import style from "./ContactsItem.module.css";

const ContactItem = ({ id, name, number, onDelete }) => {
  const remove = () => onDelete(id);
  return (
    <li className={style.li}>
      <p>
        {name}: {number}
      </p>
      <button className={style.btn} onClick={remove}>
        delete
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