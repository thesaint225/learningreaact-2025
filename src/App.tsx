import AlertButton from './AlertButton';
import './App.css';
import AgeCard from './components/AgeCard';
import Greeting from './components/greeting';
import Profile from './components/profile';
import UseCard from './components/UseCard';
import CustomButton from './CustomButton';

function App() {
  function handleClick() {
    alert('button click');
  }
  return (
    <>
      {/* <Home />
      <Gallery />
      <Profile1 />
      <Congratulation />
      <Bio /> */}
      {/* <Greeting name='henri' />
      <Greeting name='Miessan' />
      <Profile imageUrl='../public/profilepic.jpg' altText='my doctor ' /> */}
      <AgeCard name='Miesan' age={30} />
      <UseCard name='Miessan' age={30} location='Accra' />
      <CustomButton label='submit' />
      <AlertButton label='click me' henri={handleClick} />
    </>
  );
}

export default App;
