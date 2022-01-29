import './App.css';
import Header from '../shared/Header/Header';
import Main from '../pages/Main/Main';

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
