import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import { Input } from 'antd';
import './index.css'
export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    handleKyeUp = (event) => {
        const { keyCode, target } = event
        if (keyCode !== 13)
            return
        console.log(target.value)
        if (target.value.trim() === "") {
            alert("Input can not be empty!")
            return
        }
        const todoObj = { id: nanoid(), name: target.value, done: false }
        this.props.addTodo(todoObj)
        target.value = ""
        console.log("target.val: " + target.value)
        console.log("target.val: " + target.value)
    }
    render() {
        return (
            <div className="todo-header">
                <input size="large" onKeyUp={this.handleKyeUp} type="text" placeholder="type the task name, then press enter to confirm" />
            </div>
        )
    }
}