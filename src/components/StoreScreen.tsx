import type { Screen } from '../App';

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}
function StoreScreen({ setScreen }: Props) {
    return (
        <>
            <div>Your StoreScreen goes here 🧥🚗</div>
            <button onClick={() => setScreen('menu')}>Back to Menu</button>
        </>
    )
}
export default StoreScreen;
