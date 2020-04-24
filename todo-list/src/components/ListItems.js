import React from 'react';
import ListItem from './ListItem';

class ListItems extends React.Component {
  constructor(props) {
    super(props);

    this.inputItemRef = React.createRef();

    this.state = {
      listItems: [],
      todoItem: '',
      isInputVisible: false,
    };
  }

  handleChange = (e) => {
    this.setState({ todoItem: e.target.value, isInputEmpty: false });
  };

  hideInput = (e) => {
    if (e.keyCode === 27) {
      this.setState({
        isInputVisible: false,
        isInputEmpty: false,
      });
    }
  };

  handleSubmitItems = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      todoItem: this.state.todoItem,
    };

    if (this.state.todoItem !== '') {
      this.setState({
        listItems: [...this.state.listItems, newItem].sort((a, b) =>
          a.todoItem > b.todoItem ? 1 : -1
        ),
        todoItem: '',
        isInputEmpty: false,
      });
    } else {
      this.setState({ isInputEmpty: true });
    }
  };

  handleAddBtnClick = () => {
    this.setState({
      isInputVisible: true,
    });

    // Add focus to input New Item
    setTimeout(() => {
      if (this.inputItemRef.current !== null) {
        this.inputItemRef.current.focus();
      }
    }, 100);
  };

  handleDeleteItems = (listItemId) => {
    const listItems = this.state.listItems.filter(
      (listItem) => listItem.id !== listItemId
    );

    this.setState({ listItems });
  };

  ondrop = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="p-10">
        {!this.props.isEditing ? (
          <button
            type="button"
            className="btn btn-add"
            onClick={this.handleAddBtnClick}
          >
            <i
              className={`fa fa-plus-circle ${
                this.state.isInputVisible ? 'fa-minus-circle' : ''
              }`}
            ></i>
          </button>
        ) : null}

        {this.state.isInputVisible ? (
          <form onSubmit={this.handleSubmitItems} className="form-add-new-item">
            <input
              type="text"
              placeholder="New Item"
              className={`form-control ${
                this.state.isInputEmpty ? 'error' : null
              }`}
              value={this.state.todoItem}
              ref={this.inputItemRef}
              onChange={this.handleChange}
              onKeyDown={this.hideInput}
            />

            {this.state.isInputEmpty ? (
              <div className="error">Please add text to the input</div>
            ) : null}
          </form>
        ) : null}

        <ul className="list-items">
          {this.state.listItems.map((listItem) => (
            <ListItem
              key={listItem.id}
              id={listItem.id}
              item={listItem.todoItem}
              onDelete={this.handleDeleteItems}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ListItems;
