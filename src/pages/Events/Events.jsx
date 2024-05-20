import cardData from '../../data/card-data';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Pagination from '../../components/Pagination/Pagination';

export default function Events() {
  return (
    <Section>
      <Container>
        <SectionTitle title={'Events'} />
        <Pagination items={cardData} itemsPerPage={12} />
      </Container>
    </Section>
  );
}
