import type { Screen } from '../App';
import '../styles/MenuScreen.css'

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}
function MenuScreen({ setScreen }: Props) {
    return (
        <div className="menu-screen">
            <h2>Main Menu</h2>

            <div className='main-section'>
                <div className='left-content'>
                    <img src='Car1.PNG' alt='Cat image'></img>
                    <button onClick={() => setScreen('timer')}>Study Session</button>
                </div>
                <div className='side-buttons'>
                    <button onClick={() => setScreen('closet')}>Closet</button>
                    <button onClick={() => setScreen('store')}>Store</button>
                    <button onClick={() => setScreen('tutorial')}>Tutorial</button>
                    <button onClick={() => setScreen('settings')}>Settings</button>
                    <button onClick={() => setScreen('home')}>Back to Home</button>
                </div>
            </div>
        </div>
    );
}

export default MenuScreen;
