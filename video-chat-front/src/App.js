import { LoginRouter } from "./routers";
import background from "./assets/background.jpg";

function App() {
    return (
        <div
            className="app h-screen"
            style={{ backgroundImage: `url(${background})` }}
        >
            <LoginRouter />
        </div>
    );
}

export default App;
