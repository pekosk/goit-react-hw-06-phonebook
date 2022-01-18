import styles from "./Filter.module.css";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filter/filterActions";

const Filter = () => {
  const dispatch = useDispatch();
  const onFilter = (e) => dispatch(changeFilter(e.target.value))
  const value = useSelector((state) => state.filter)
return (
    <label className={styles.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onFilter} className={styles.input}></input>
    </label>
    )
}

export default memo(Filter);