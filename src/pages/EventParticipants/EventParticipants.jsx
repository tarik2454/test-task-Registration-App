import participantsData from '@/data/participants-data';

import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ParticipantsList from '../../components/ParticipantsList/ParticipantsList';

export default function EventParticipants() {
  return (
    <Section>
      <Container>
        <SectionTitle title={'"Awesome Events" participants'} />
        <ParticipantsList currentItems={participantsData} />
      </Container>
    </Section>
  );
}
