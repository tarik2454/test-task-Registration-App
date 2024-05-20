import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from './Loader/Loader';

import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
