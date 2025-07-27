import type { Screen } from '../App';

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}
function TutorialScreen({ setScreen }: Props) {
    return (
        <>
            <div>Your TutorialScreen goes here 🧥🚗</div>
            <button onClick={() => setScreen('menu')}>Back to Menu</button>
        </>
    )
}
export default TutorialScreen;
