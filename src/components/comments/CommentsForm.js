import React from 'react';

const CommentForm = props => {

  return (
    <form id="commentsForm" onSubmit={ props.handleOnCommentSubmit }>
      <label>
        By:
        <input type="text"
          name="author"
          value={ props.value }
          onChange={ props.handleAuthorOnChange }
        />
      </label>
      <label>
        Content:
        <input type="text"
          name="content"
          value={ props.contentValue }
          onChange={ props.handleContentOnChange }/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );

}

export default CommentForm
