import React from 'react';

class AddNewItemInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          placeholder="Add task"
          value={this.state.text}
          onChange={this.props.handleChange}
        />
      </form>
    );
  }
}

export default AddNewItemInput;
