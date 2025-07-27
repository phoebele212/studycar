import { useState } from 'react'
import './App.css'

import ClosetScreen from './components/ClosetScreen';
import StoreScreen from './components/StoreScreen';
import TutorialScreen from './components/TutorialScreen';
import SettingsScreen from './components/SettingsScreen';
import TimerScreen from './components/TimerScreen';
import HomeScreen from './components/HomeScreen';
import MenuScreen from './components/MenuScreen';

function App() {
  const [screen, setScreen] = useState<
    'home' | 'menu' | 'timer' | 'closet' | 'store' | 'settings' | 'tutorial'
  >('home');

  return (
    <>
      {screen === 'home' && <HomeScreen setScreen={setScreen} />}
      {screen === 'menu' && <MenuScreen setScreen={setScreen} />}
      {screen === 'timer' && <TimerScreen setScreen={setScreen} />}
      {screen === 'closet' && <ClosetScreen setScreen={setScreen} />}
      {screen === 'store' && <StoreScreen setScreen={setScreen} />}
      {screen === 'settings' && <SettingsScreen setScreen={setScreen} />}
      {screen === 'tutorial' && <TutorialScreen setScreen={setScreen} />}
    </>
  )
}

export default App;
