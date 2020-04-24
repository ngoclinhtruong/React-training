import React from 'react';

class RenderEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.updateNameInputRef = React.createRef();

    this.state = {
      id: this.props.id,
      name: this.props.title,
    };

    console.log(this.updateNameInputRef);
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleTodoListNameChange(this.state.id, this.state.name);

    this.props.showTitle();
  };

  handleEscTodoListNameChange = (e) => {
    if (e.keyCode === 27) {
      this.props.showTitle();
    }
  };

  componentDidMount() {
    if (this.updateNameInputRef.current !== null) {
      this.updateNameInputRef.current.focus();
    }
  }

  render() {
    return (
      <div className="header p-10">
        <form className="form-edit" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder={this.state.name}
            value={this.state.name}
            ref={this.updateNameInputRef}
            onChange={this.handleChange}
            onKeyDown={this.handleEscTodoListNameChange}
          />
          <button type="submit" className="btn btn-save">
            <i className="fa fa-save"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default RenderEditForm;
