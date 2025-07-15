import './App.css';
import Bio from './components/bio';
import Congratulation from './components/congratulation ';
import Gallery from './components/gallery';
import Home from './components/home';
import { Profile1 } from './components/profile1';

function App() {
  return (
    <>
      <Home />
      <Gallery />
      <Profile1 />
      <Congratulation />
      <Bio />
    </>
  );
}

export default App;
