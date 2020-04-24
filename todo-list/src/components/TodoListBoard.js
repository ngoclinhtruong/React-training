import React from 'react';
import TodoList from './TodoList';

class TodoListBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoLists: [],
      textName: '',
      isInputEmpty: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      textName: e.target.value,
      isInputEmpty: false,
    });
  };

  handleSubmitTodoBoard = (e) => {
    e.preventDefault();

    const newList = {
      id: Date.now(),
      textName: this.state.textName,
    };

    if (this.state.textName !== '') {
      this.setState({
        todoLists: [...this.state.todoLists, newList],
        textName: '',
        isInputEmpty: false,
      });
    } else {
      this.setState({ isInputEmpty: true });
    }
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
      <div className="create-list">
        <form onSubmit={this.handleSubmitTodoBoard}>
          <div className="form-group create-list-form d-flex m-2">
            <input
              type="text"
              placeholder="New Todo List"
              className={`form-control mr-2 ${
                this.state.isInputEmpty ? 'error' : null
              }`}
              value={this.state.textName}
              onChange={this.handleChange}
            />
            {this.state.isInputEmpty ? (
              <div className="error">Please add text to the input</div>
            ) : null}
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
