import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CardList from '../../components/CardList/CardList';

export default function Events() {
  return (
    <Section>
      <Container>
        <SectionTitle title={'Events'} />
        <CardList />
      </Container>
    </Section>
  );
}
