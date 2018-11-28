export function fetchPhoto(date) {

  return (dispatch) => {
    dispatch({type: 'FETCH_PHOTO'});
    fetch(`http://localhost:3001/pictures/${date}`,{
      method: 'GET'})
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_PHOTO_TO_STATE', data: data}))
  }

}


export function fetchTodaysPhoto() {
  return (dispatch) => {
    dispatch({type: 'FETCH_TODAYS_PHOTO'});
    fetch(`http://localhost:3001`,{
      method: 'GET'})
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_PHOTO_TO_STATE', data: data}))
  }

}


export function fetchMarsPhotos(){
  return (dispatch) => {
    dispatch({type: 'FETCH_MARS_PHOTOS'});
    fetch(`http://localhost:3001/mars`,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_MARS_PHOTO_TO_STATE', data: data}))

  }
}


export function signIn(username, password) {

    return (dispatch) => {
        const body = JSON.stringify({username: username, password:password})
      console.log(body)

        // dispatch({ type: "BEGIN_USER_REQUEST" })

        return fetch("/signin", {
            method: 'POST',
            body: body,
            headers: { "Content-type": 'application/json' },
        })
            .then(resp => resp.json())
      
            .then(userInfo => {
                if(userInfo.error){
                    window.alert(userInfo.error)
                }else {
                    localStorage.setItem("jwtToken", userInfo.jwt)
                    localStorage.setItem("currentUser", userInfo.user.username)
                    dispatch({ type: "LOGIN", payload: userInfo })
                }

            })
    }

}
