import React from 'react';

class TodoList extends React.Component {
  render() {
    if (this.props.items) {
      return this.props.items.map(item => {
        return <li key={item.id}>{item.text}</li>;
      });
    } else {
      return 'no added item';
    }
  }
}

export default TodoList;
