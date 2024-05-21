import PropTypes from 'prop-types';
import Participant from '../Participant/Participants';
import styles from './ParticipantsList.module.scss';

export default function ParticipantsList({ currentItems }) {
  return (
    <ul className={styles.participant_wrapper}>
      {currentItems.map(participant => (
        <Participant
          key={participant.id}
          name={participant.name}
          email={participant.email}
        />
      ))}
    </ul>
  );
}

ParticipantsList.propTypes = {
  currentItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};
