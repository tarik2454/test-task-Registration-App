import PropTypes from 'prop-types';

import styles from '../Section/Section.module.scss';

const Section = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
