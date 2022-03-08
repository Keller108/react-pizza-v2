import Header from '../shared/Header/Header';
import { Main } from '../pages/Main/Main';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <div className="app">
                <Header />
                <Main />
            </div>
        </div>
    );
}

export default App;
