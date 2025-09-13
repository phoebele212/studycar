import type { Screen } from '../App';
import '../styles/HomeScreen.css'
interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}
function HomeScreen({ setScreen }: Props) {
    return (
        <div className='screen home-screen'>
            <h2>WELCOME TO</h2>
            <h1>StudyCar</h1>
            <img src='/Car1.png' alt="Cat image" className="pixel-art"></img>
            <button onClick={() => setScreen('menu')}>START</button>
        </div >
    );
}

export default HomeScreen;
