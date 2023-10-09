import Forms from './components/Forms';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='container my-4'>
        <Forms heading="Foms" />
      </div>

    </>
  );
}

export default App;
