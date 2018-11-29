import React from 'react'
import Comment from './Comment'

const Comments = (props) =>{

  return (
    <div>
      {props.comments.map((comment) => {
          return  <Comment key={comment.id} content={comment.content} />
        })
      }
    </div>
  )
}

export default Comments
