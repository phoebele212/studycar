interface Props {
    setScreen: (s: string) => void;
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
