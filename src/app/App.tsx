import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { useContext } from 'react';
import Header from '../shared/Header/Header';
import { Main } from '../pages/Main/Main';
import { Cart } from '../pages/Cart/Cart';
import './App.css';
import { CartContext } from "../processes/CartProcess";
import { observer } from "mobx-react-lite";

const App = observer(() => {
    const { cartStore } = useContext(CartContext);

    let total = cartStore.total;
    let quantity = cartStore.cart.length;

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className="app">
                    <Header total={total} quantity={quantity} />
                    <Routes>
                        <Route path="/" element={<Main cartStore={cartStore}/>} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
});

export default App;
