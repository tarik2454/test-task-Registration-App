import Card from '../Card/Card';
import cardData from '../../data/card-data';
import styles from './CardList.module.scss';

export default function CardList() {
  return (
    <ul className={styles.card_wrapper}>
      {cardData.map(card => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </ul>
  );
}
