import CounterContextProvider from '../../contexts/CounterContext';

import APIExample from '../APIExample';
import ContenuTextuel from '../ContenuTextuel';

import './index.css';

export default function App() {
  return (
    <CounterContextProvider>
      <section>
        <ContenuTextuel />
        <img alt="Ma super image" src="https://fastly.picsum.photos/id/69/536/354.jpg?hmac=db-inQzMJVVZ_K74EU0XhuvI7QywerptRlOSBkxzvDA" />
        <APIExample />
      </section>
    </CounterContextProvider>
  );
}