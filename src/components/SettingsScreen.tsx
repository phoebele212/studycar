interface Props {
    setScreen: (s: string) => void;
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
