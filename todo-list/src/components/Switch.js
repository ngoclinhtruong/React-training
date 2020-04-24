import React from 'react';

class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: props.isChecked || false,
    };
  }

  handleToggle = (e) => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          value={this.state.isChecked}
          onChange={this.handleToggle}
        />
      </div>
    );
  }
}

export default Switch;
