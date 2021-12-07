import React from 'react';
import classesModal from '../../App.module.css'

const CartItem = (props: { title: string, amount: number }) => {
    return <div style={{display: "grid", gridTemplateColumns: '3fr 1fr', paddingBottom: '15px'}}>
        {props.title}: {props.amount}
    </div>
}

export const CartModal = ({cartCount, emptyCart, onClose, cartItems}: CartModalPropsType) => {

    //calculate each product amount in the cart
    let cartItemsObj: any = {}
    cartItems.length && cartItems.forEach(el => cartItemsObj[el] ? cartItemsObj[el] += 1 : cartItemsObj[el] = 1)
    const cartItemsByName: Array<[string, number]> = Object.entries(cartItemsObj);

    return (
        <div className={classesModal.modal} onClick={onClose}>
            <div className={classesModal.modalCont}
                 onClick={e => e.stopPropagation()}
                 style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                <span className={classesModal.close} onClick={onClose}></span>
                <div className={classesModal.modalTitle} style={{paddingTop: '35px', textAlign: 'center'}}>
                    {cartCount === 0
                        ? 0
                        : cartItemsByName.length && cartItemsByName.map(item =>
                        <CartItem title={item[0]} amount={item[1]}/>)}

                </div>
                <div className={classesModal.modalDescriptionCont}>
                    <button onClick={emptyCart} style={{width: '100%'}}>EMPTY CART</button>
                </div>
            </div>
        </div>
    )
}

//types
type CartModalPropsType = {
    cartCount: number
    emptyCart: () => void
    onClose: () => void
    cartItems: string[]
}
