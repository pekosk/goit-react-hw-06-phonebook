import styles from "./Form.module.css";
import PropTypes from "prop-types";
import {nanoid} from "nanoid";
import { useState, memo } from 'react';



function Form({ onSubmit }) {
  const initialState = {
    name: '',
    number: '',
  }

  const [state, setState] = useState(initialState)

  const nameRandomId = nanoid();
  const numberRandomId = nanoid();

   const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
    setState(initialState);
  };
  
    return (
      <div>
        <form onSubmit={handleSubmit} className={styles.addForm}>
          <label className={styles.label} htmlFor={nameRandomId}>
            Name:
            <input
              onChange={handleChange}
              value={state.name}
              id={nameRandomId}
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label htmlFor={numberRandomId} className={styles.label}>
            Number:
            <input
              className={styles.input}
              value={state.number}
              id={numberRandomId}
              onChange={handleChange}
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit" className={styles.btn}>
            Add Contact
          </button>
        </form>
      </div>
    );
  }


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(Form);
