import React, { Component } from 'react';

const CommentForm = props => {
  return (
    <form onSubmit={props.handleOnCommentSubmit}>
      <label >
        Title:
        <input type="text"
          name="title"
          value={props.value}
          onChange={props.handleTitleOnChange}
        />
      </label>
      <label>
        Content:
        <input type="text"
          name="content"
          value={props.contentValue}
          onChange={props.handleContentOnChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default CommentForm
