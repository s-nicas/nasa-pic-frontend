import React from 'react';
import LikeButton from './LikeButton';


const Comment = ( props ) => {
  return (
      <div>
          <p><b><i>{ props.author }</i></b> says <i>"{ props.content }"</i></p>
          <LikeButton/>
      </div>
    )
  }

export default Comment
