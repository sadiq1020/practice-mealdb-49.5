import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;

    return (
        <div>
            <h3>Selected Items: {cart.length}</h3>
            {/* <h4>{mealName}</h4> */}
            {cart.map(item => <h4>{item.strMeal}</h4>)}
        </div>
    );
};

export default Cart;
