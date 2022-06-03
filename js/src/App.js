
import './App.css';
import './components/Intro';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import './components/Superhero';
import './style/landingPage.css'

function App() {
  return (
    <div>
      <div className='myBG border'>
        <NavigationBar />
        <Intro />
      </div>
      <div className='trending border'>
        <Trending />
      </div>
      
    </div>
  );
}

export default App;
