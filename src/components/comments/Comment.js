import React from 'react';


const Comment = ( props ) => {
  return (
      <div>
          <p><b><i>{ props.author }</i></b> says <i>"{ props.content }"</i></p>
      </div>
    )
  }

export default Comment
