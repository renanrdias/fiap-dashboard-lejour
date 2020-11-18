import React, { Component } from 'react';
import classes from './Finance.module.scss';


export default class Finance extends Component {
    render() {
        return(
            <div id='finance' className={classes.Finance}>
            <h4>Faturamento Mensal</h4>
                {this.props.children}
            </div>
        );
    }
}
