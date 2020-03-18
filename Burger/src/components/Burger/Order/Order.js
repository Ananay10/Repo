import React from 'react'
import Aux from '../../../hoc/Aux';

const ordersummary = (props) => {
    const ingredientsummary = Object.keys(props.ingredients)
    .map(igkey=>{
        return (
        <li key={igkey}>
            {igkey} : {props.ingredients[igkey]}
            </li>
            );
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Burger ingredients: </p>
            <ul>
                {ingredientsummary}
            </ul>
        </Aux>
    );
};
export default ordersummary;