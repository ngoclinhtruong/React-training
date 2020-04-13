import React from 'react';
import TodoList from './TodoList';
import AddNewItemInput from './AddNewItemInput';

class CreateListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      text: ''
    };
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);

    if (this.state.text.length === 0) return;

    const newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState({
      items: [...this.state.items, newItem],
      text: ''
    });

    console.log(newItem);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group d-flex m-2">
            <input
              type="text"
              placeholder="New Todo List"
              className="form-control mr-2"
              id="todoInput"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              className="form-control btn btn-primary w-25"
            />
          </div>
        </form>

        <button type="button" className="btn btn-add">
          <i className="fa fa-plus-circle"></i>
        </button>

        <AddNewItemInput
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />

        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default CreateListForm;
