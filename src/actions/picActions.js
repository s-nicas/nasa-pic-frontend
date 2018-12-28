export function fetchPhoto(date) {
  return (dispatch) => {
    dispatch({type: 'FETCH_PHOTO'});
    fetch(`http://localhost:3001/pictures/${date}`, {
      method: 'GET'})
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_PHOTO_TO_STATE', data: data}))
  }
}

export function fetchTodaysPhoto() {
  return (dispatch) => {
    dispatch({type: 'FETCH_TODAYS_PHOTO'});
    fetch(`http://localhost:3001`, {
      method: 'GET'})
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_PHOTO_TO_STATE', data: data}))

  }
}

export function addComment(author, content, date) {
  return (dispatch)=>{
    const body = JSON.stringify({author: author, content: content})
    dispatch({type:"COMMENT_REQUEST"})
    return fetch(`http://localhost:3001/pictures/${date}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    })
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_COMMENT_TO_STATE', data: data}))

  }
}


export function fetchAllPhotos() {
  return (dispatch) => {
    dispatch({type: 'FETCH_ALL_PHOTOS'});
    fetch(`http://localhost:3001/pictures`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_ALL_PHOTOS_TO_STATE', data: data }))
  }
}
