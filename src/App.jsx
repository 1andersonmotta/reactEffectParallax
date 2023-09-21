import './App.css'

import { ParallaxProvider } from 'react-scroll-parallax';
import Component from './components/Component';
import AdvancedBannerTop from './components/AdvancedBannerTop';
import Cat from './components/Cat';

function App() {
  return (
    <ParallaxProvider pages={1}>
      <Cat />

      <Component offset={0} />

      <AdvancedBannerTop offset={1} />
      <div className="center full">
        <h1 className="headline gray">Alguém me para!</h1>
      </div>

    </ParallaxProvider>
  );
}


export default App
