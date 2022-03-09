export function Cart() {
    return (
        <main className="cart">
            <div className="cart__title-container">
                <img className="cart__title-icon" />
                <h1 className="cart__title">
                    Корзина
                </h1>
                <button className="cart__empty-cart-btn" type="button">
                    Очистить корзину
                </button>
            </div>
        </main>
    )
}