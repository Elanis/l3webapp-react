import CounterContextProvider from '../../contexts/CounterContext';

import APIExample from '../APIExample';
import ContenuTextuel from '../ContenuTextuel';

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ContenuTextuel />,
  },
  {
    path: "/other",
    element: <>
        <img alt="Ma super image" src="https://fastly.picsum.photos/id/69/536/354.jpg?hmac=db-inQzMJVVZ_K74EU0XhuvI7QywerptRlOSBkxzvDA" />
        <APIExample />
    </>,
  },
]);

export default function App() {
  return (
    <CounterContextProvider>
      <section>
        <RouterProvider router={router} />
      </section>
    </CounterContextProvider>
  );
}