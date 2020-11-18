import React from 'react';
import classes from './Budget.module.scss';


const Budget = (props) => {
    return(
        <div className={classes.Budget}>
        <h4>Orçamento médio por estilo</h4>
            {props.children}
        </div> 
    );
}

export default Budget;