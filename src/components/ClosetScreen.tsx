import type { Screen } from '../App';

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}
function ClosetScreen({ setScreen }: Props) {
    return (
        <>
            <div>Your ClosetScreen goes here 🧥🚗</div>
            <button onClick={() => setScreen('menu')}>Back to Menu</button>
        </>
    )
}
export default ClosetScreen;
