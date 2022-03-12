import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Header from '../shared/Header/Header';
import { Main } from '../pages/Main/Main';
import { Cart } from '../pages/Cart/Cart';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="cart" element={<Cart />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
