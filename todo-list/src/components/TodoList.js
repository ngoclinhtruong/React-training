import React from 'react';
import ListItems from './ListItems';
import RenderTitle from './RenderTitle';
import RenderEditForm from './RenderEditForm';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
  }

  render() {
    const isEditing = this.state.isEditing;

    if (isEditing) {
      return (
        <div className="todo-list">
          <div className="todo-list-wrapper">
            <RenderEditForm
              id={this.props.id}
              title={this.props.textName}
              isEditing={this.state.isEditing}
              handleTodoListNameChange={this.props.handleTodoListNameChange}
              showTitle={() => this.setState({ isEditing: false })}
            />
            <ListItems isEditing={this.state.isEditing} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="todo-list">
          <div className="todo-list-wrapper">
            <RenderTitle
              id={this.props.id}
              title={this.props.textName}
              isEditing={this.state.isEditing}
              onDelete={this.props.onDelete}
              onEdit={() => this.setState({ isEditing: true })}
            />
            <ListItems isEditing={this.state.isEditing} />
          </div>
        </div>
      );
    }
  }
}

export default TodoList;
