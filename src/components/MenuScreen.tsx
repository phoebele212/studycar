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
                    <img src='/Car1.png' alt="Cat image" className="pixel-art"></img>
                    <h3>COINS:00</h3>
                    <button onClick={() => setScreen('timer')}>STUDY SESSION</button>
                </div>
                <div className='side-buttons'>
                    <button onClick={() => setScreen('closet')}>CLOSET</button>
                    <button onClick={() => setScreen('store')}>STORE</button>
                    <button onClick={() => setScreen('tutorial')}>TUTORIAL</button>
                    <button onClick={() => setScreen('settings')}>SETTINGS</button>
                    <button onClick={() => setScreen('home')}>BACK TO HOME</button>
                </div>
            </div>
        </div>
    );
}

export default MenuScreen;
