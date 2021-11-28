import React from 'react';
import s from '../App.module.css'
import cart from '../assets/images/shopping-cart-2029.png'

export const Cart = (props: CartPropsType) => {
    return (
        <div className={s.cart}>
            <div className={s.cartCount}>
                <div>
                    {props.cartCount}
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
