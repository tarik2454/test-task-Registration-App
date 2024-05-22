import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

export default function Card({ title, description, cardId }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <h2 className={styles.card_title}>{title}</h2>
        <p className={styles.card_description}>{description}</p>
      </div>
      <div className={styles.link_wrapper}>
        <Link className={styles.link_item} to={`/event-registration/${cardId}`}>
          Register
        </Link>
        <Link className={styles.link_item} to={`/event-participants/${cardId}`}>
          View
        </Link>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
