import React from 'react';
import classesCart from '../../App.module.css'
import cart from '../../assets/images/shopping-cart-2029.png'

export const Cart = ({cartCount}: CartPropsType) => {
    return (
        <div className={classesCart.cart}>
            <div className={classesCart.cartCount}>
                <div>
                    {cartCount}
                </div>
                <div>
                    <img src={cart} alt='cart' />
                </div>
            </div>
        </div>
    )
}

//types
type CartPropsType = {
    cartCount: number
}
