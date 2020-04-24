import React from 'react';
import TodoList from './TodoList';

class TodoListBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoLists: [],
      textName: '',
    };
  }

  handleChange = (e) => {
    this.setState({ textName: e.target.value });
  };

  handleSubmitTodoBoard = (e) => {
    e.preventDefault();

    const newList = {
      id: Date.now(),
      textName: this.state.textName,
    };

    this.setState({
      todoLists: [...this.state.todoLists, newList],
      textName: '',
    });
  };

  handleDeleteList = (todoListNameId) => {
    console.log(todoListNameId);
    const todoLists = this.state.todoLists.filter(
      (todoListName) => todoListName.id !== todoListNameId
    );
    this.setState({ todoLists });
  };

  handleTodoListNameChange = (id, newName) => {
    const index = this.state.todoLists.findIndex(
      (todoList) => todoList.id === id
    );

    const newTodoList = [...this.state.todoLists];

    newTodoList[index] = { id, textName: newName };

    this.setState({
      todoLists: newTodoList,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitTodoBoard}>
          <div className="form-group d-flex m-2">
            <input
              type="text"
              placeholder="New Todo List"
              className="form-control mr-2"
              value={this.state.textName}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              className="form-control btn btn-primary w-25"
            />
          </div>
        </form>

        <div className="todo-lists">
          {this.state.todoLists.map((todoListName) => (
            <TodoList
              key={todoListName.id}
              id={todoListName.id}
              textName={todoListName.textName}
              onDelete={this.handleDeleteList}
              handleTodoListNameChange={this.handleTodoListNameChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoListBoard;
