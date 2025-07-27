interface Props {
    setScreen: (s: string) => void;
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
