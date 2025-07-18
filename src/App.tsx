import './App.css';
import AgeCard from './components/AgeCard';
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
      <AgeCard name='Miesan' age={30} />
    </>
  );
}

export default App;
