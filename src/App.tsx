import './App.css';
import Greeting from './components/greeting';
import Profile from './components/profile';

function App() {
  return (
    <>
      {/* <Home />
      <Gallery />
      <Profile1 />
      <Congratulation />
      <Bio /> */}
      <Greeting name='henri' />
      <Greeting name='Miessan' />
      <Profile />
    </>
  );
}

export default App;
