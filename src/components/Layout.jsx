import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Container from './Container/Container';
import Section from './Section/Section';
import Loader from './Loader/Loader';

import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Container>
          <Section>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Section>
        </Container>
      </main>
    </div>
  );
}
