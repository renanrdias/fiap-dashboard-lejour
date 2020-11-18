import React, { Component } from 'react';
import classes from './Finance.module.scss';


export default class Finance extends Component {
    render() {
        return(
            <div className={classes.Finance}>
                {this.props.children}
            </div>
        );
    }
}
