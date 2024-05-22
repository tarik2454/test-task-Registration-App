import { useState, useEffect } from 'react';

import { getEvents } from '../../apiServices/apiServices';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(() => {
    const firstLoad = localStorage.getItem('firstLoad');
    return firstLoad === null;
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.warn(error.message);
      } finally {
        setIsLoading(false);
        if (isFirstLoad) {
          localStorage.setItem('firstLoad', 'false');
          setIsFirstLoad(false);
        }
      }
    };

    getData();
  }, [isFirstLoad]);

  if (isLoading && isFirstLoad) {
    return (
      <>
        <div>
          If there could be delays in loading for several minutes due to the
          server being hosted on a free hosting with its limitations!!!
        </div>
        <Loader />
      </>
    );
  }

  return (
    <Section>
      <Container>
        <SectionTitle title={'Events'} />
        <Pagination items={events} itemsPerPage={12} />
      </Container>
    </Section>
  );
}
