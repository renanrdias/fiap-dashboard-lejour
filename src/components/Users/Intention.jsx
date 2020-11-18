import React, { Component } from 'react';
import classes from './Intention.module.scss';





export default class Intention extends Component {
    render(){
        return(
            <div className={classes.Intention}>
            <h4>Meses de intenção de casar</h4>
                {this.props.children}
            </div>

        );
    }
}