import type { Screen } from '../App';

interface Props {
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}
function SettingsScreen({ setScreen }: Props) {
    return (
        <>
            <div>Your SettingsScreen goes here 🧥🚗</div>
            <button onClick={() => setScreen('menu')}>Back to Menu</button>
        </>
    )
}
export default SettingsScreen;
