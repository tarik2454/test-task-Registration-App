import { useState, useEffect, useRef } from 'react';

import { getEvents } from '../../apiServices/apiServices';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.warn(error.message);
      } finally {
        setIsLoading(false);
        isFirstLoad.current = false;
      }
    };

    if (isFirstLoad.current) {
      getData();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <Section>
      <Container>
        <SectionTitle title={'Events'} />
        {isLoading ? (
          <Loader />
        ) : (
          <Pagination items={events} itemsPerPage={12} />
        )}
      </Container>
    </Section>
  );
}
