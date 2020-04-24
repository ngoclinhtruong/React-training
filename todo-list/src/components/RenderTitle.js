import React from 'react';

const RenderTitle = (props) => {
  return (
    <div className="header p-10">
      <h2>
        <span className="title-txt" onClick={props.onEdit}>
          {props.title}
        </span>

        <button
          type="button"
          className="btn btn-trash"
          onClick={() => props.onDelete(props.id)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </h2>
    </div>
  );
};

export default RenderTitle;
