import React, { Component } from 'react';
import classes from './UsersInfo.module.scss';




export default class UsersInfo extends Component {
    render() {
        return (
            <div className={classes.MainChart}>
                <h4>Cadastros de usuários mensais</h4>
                {this.props.children}
            </div>
        );
    }
}
 