import './App.css';
import Spinner from '@components/Global/Spinner';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <h1>hellow</h1>
    </Suspense>
  );
}

export default App;
