import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: props.isChecked || false,
    };
  }

  handleCheckbox = (e) => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    return (
      <li>
        <input
          type="checkbox"
          value={this.state.isChecked}
          onChange={this.handleCheckbox}
        />
        <span
          className={`item-name ${this.state.isChecked ? 'completed' : ''}`}
        >
          {this.props.item}
        </span>
        <span
          className="btn-del"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          &times;
        </span>
      </li>
    );
  }
}

export default ListItem;
