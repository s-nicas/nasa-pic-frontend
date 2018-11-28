export default function rootsReducer(state = {
    isFetchingPhoto: false,
    pictures: [],
    commentRequestInProgress: false
    // comments: [],
    // userRequestInProgress: false,
    // currentUser: null,
    // loggedIn: false
    // ,
    // picture: {}
  }, action) {
    switch (action.type) {
      case 'FETCH_PHOTO':
        return {...state, isFetchingPhoto: true, pictures: []}
       case 'ADD_PHOTO_TO_STATE':
        return {isFetchingPhoto: false, pictures: action.data}
       case 'FETCH_MARS_PHOTOS':
        return {isFetchingPhoto: true, pictures: []}
       case 'ADD_MARS_PHOTO_TO_STATE':
        return {isFetchingPhoto: false, pictures: action.data}
        case 'BEGIN_USER_REQUEST':
         return {...state, userRequestInProgress: true}
        case 'LOGIN':
          return { loggedIn: true, currentUser: action.payload.user }
        case 'COMMENT_REQUEST':
            return {...state, commentRequestInProgress: true}
       default:
        return state;
    }
  }
