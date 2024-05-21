import PropTypes from 'prop-types';
import styles from './Participant.module.scss';

export default function Participant({ name, email }) {
  return (
    <div className={styles.participant}>
      <p className={styles.participant_name}>{name}</p>
      <p className={styles.participant_email}>{email}</p>
    </div>
  );
}

Participant.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
