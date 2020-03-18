import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';
import { ProgressPlugin } from 'webpack';

const controls = [
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Onion', type: 'onion'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControl = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: $ <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl =>(
            <BuildControl key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingridientAdded(ctrl.type)} 
            removed={() => props.ingridientRemoved(ctrl.type)} />
        ))}
        <button className={classes.OrderButton} 
        disabled={!props.purchasable}
        onClick={props.ordered}>Order Now</button>
    </div>
);
export default buildControl;