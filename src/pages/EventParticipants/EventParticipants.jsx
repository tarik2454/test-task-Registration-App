import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getParticipants } from '../../apiServices/apiServices';

import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ParticipantsList from '../../components/ParticipantsList/ParticipantsList';

export default function EventParticipants() {
  const [participants, setParticipants] = useState([]);

  const params = useParams();
  const eventId = params.eventId;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getParticipants(eventId);
        console.log(data);
        setParticipants(data);
      } catch (error) {
        console.warn(error.message);
      }
    };

    getData();
  }, [eventId]);

  return (
    <Section>
      <Container>
        <SectionTitle title={'"Awesome Events" participants'} />
        <ParticipantsList currentItems={participants} />
      </Container>
    </Section>
  );
}
