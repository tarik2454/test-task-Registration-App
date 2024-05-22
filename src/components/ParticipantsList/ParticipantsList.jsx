import PropTypes from 'prop-types';
import Participant from '../Participant/Participants';
import styles from './ParticipantsList.module.scss';

export default function ParticipantsList({ currentItems }) {
  return (
    <ul className={styles.participant_wrapper}>
      {currentItems.map(participant => (
        <Participant
          key={participant._id}
          name={participant.fullName}
          email={participant.email}
        />
      ))}
    </ul>
  );
}

ParticipantsList.propTypes = {
  currentItems: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};
