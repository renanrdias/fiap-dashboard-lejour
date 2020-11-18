import React, { Component } from 'react';
import classes from './Themes.module.scss';

export default class Theme extends Component {
    render() {
        return(
            <div className={classes.Themes}>
            <h4>Representatividade por Estilo</h4>
                {this.props.children}
            </div>
        );
    }
}