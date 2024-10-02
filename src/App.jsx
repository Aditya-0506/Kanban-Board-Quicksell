import { DisplayProvider } from "./context/DisplayContext";
import Controls from "./components/Controls/Controls";
import Board from "./components/Board/Board";
import './App.css';

const App = () => {
    return (
        <DisplayProvider>
            <div className="app">
                <Controls />
                <Board />
            </div>
        </DisplayProvider>
    );
};

export default App;
