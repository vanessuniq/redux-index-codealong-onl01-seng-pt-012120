import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';

class TodosContainer extends Component {

    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index )=> <Todo todo={todo} key={index}/>)}
            </ul>
        );
    }
}
const mapStateToProps = state => {
    return {todos: state.todos}
}

export default connect(mapStateToProps)(TodosContainer)