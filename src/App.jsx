import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Layout from './components/Layout';
import Loader from './components/Loader/Loader';

const Events = lazy(() => import('./pages/Events/Events'));
const EventRegistration = lazy(() =>
  import('./pages/EventRegistration/EventRegistration')
);
const EventParticipants = lazy(() =>
  import('./pages/EventParticipants/EventParticipants')
);
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Events />} />
          <Route path="events" element={<Events />} />
          <Route
            path="event-registration/:eventId"
            element={<EventRegistration />}
          />
          <Route
            path="event-participants/:eventId"
            element={<EventParticipants />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
