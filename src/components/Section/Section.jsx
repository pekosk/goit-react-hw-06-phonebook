import styles from "./Section.module.css";
import PropTypes from "prop-types";
import { memo } from 'react';

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default memo(Section);
