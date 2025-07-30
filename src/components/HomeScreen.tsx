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
            <img src='Car1.PNG' alt="Cat image"></img>
            <button onClick={() => setScreen('menu')}>Start</button>
        </div >
    );
}

export default HomeScreen;
