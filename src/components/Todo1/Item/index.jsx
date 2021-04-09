import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
// import './index.css'
export default class Item extends Component {
    state = { mouse: false }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    handleChange = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }
    handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item')) {
            this.props.deleteTodo(id)
        }
    }
    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
                onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <Row>
                    <Col md={10}>
                        <label>
                            <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
                            <span>{name}</span>
                        </label>
                    </Col>
                    <Col md={1}>
                        <Button type="dashed" onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? "block" : "none" }}>删除</Button>
                    </Col>
                </Row>


            </li>
        )
    }
}
