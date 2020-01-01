import React, { Component } from 'react'
import './TodoItem.css'
import check from './img/check.png';
import checked from './img/checked.png';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        return (
            <div className={item.isComplete === true ? "TodoItem TodoItem-isComplete" : "TodoItem"}>
                <img onClick={onClick} width={40} src={item.isComplete === true ? checked : check} alt="unloaded" />
                <p>{item.title}</p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    item: PropTypes.shape({
        title: PropTypes.string,
        isComplete: PropTypes.bool
    })
}