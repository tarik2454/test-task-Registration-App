import { useState, useEffect } from 'react';

import { getEvents } from '../../apiServices/apiServices';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Pagination from '../../components/Pagination/Pagination';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.warn(error.message);
      }
    };

    getData();
  });

  return (
    <Section>
      <Container>
        <SectionTitle title={'Events'} />
        <Pagination items={events} itemsPerPage={12} />
      </Container>
    </Section>
  );
}
