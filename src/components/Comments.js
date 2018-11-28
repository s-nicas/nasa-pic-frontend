import React from 'react'

const Comments = (props) =>{
  const pictures = props.comments
  console.log(props)

  return (
    <div>
      {comments.map((comment) => {
        return  <Comment key={comment.id} content={comment.content} />
        })
      }
    </div>
  )

}

export default Comments
