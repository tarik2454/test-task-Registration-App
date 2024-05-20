import PropTypes from 'prop-types';

import styles from '../SectionTitle/SectionTitle.module.scss';

export default function SectionTitle({ title }) {
  return <h1 className={styles.section_title}>{title || null}</h1>;
}

SectionTitle.propTypes = {
  title: PropTypes.string,
};
