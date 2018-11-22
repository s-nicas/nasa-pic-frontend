export function fetchPhoto(date) {

  return (dispatch) => {
    dispatch({type: 'FETCH_PHOTO'});
    fetch(`http://localhost:3000/pictures/${date}`,{method: 'GET'})
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_PHOTO_TO_STATE', data: data}))
  }
}
