interface Props {
    setScreen: (s: string) => void;
}

function HomeScreen({ setScreen }: Props) {
    return (
        <div>
            <h2>Welcome to <br></br>StudyCar 🐱</h2>
            <button onClick={() => setScreen('menu')}>Start</button>
        </div>
    );
}

export default HomeScreen;
