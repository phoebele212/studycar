interface Props {
    setScreen: (s: string) => void;
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
