import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './CardList.module.scss';

export default function CardList({ currentItems }) {
  return (
    <ul className={styles.card_wrapper}>
      {currentItems.map(card => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </ul>
  );
}

CardList.propTypes = {
  currentItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};