export default function rootsReducer(state = {
    isFetchingPhoto: false,
    pictures: [],
    comments: [],
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
        return {isFetchingPhoto: false, pictures: action.data, comments: action.data.comments}
       case 'FETCH_MARS_PHOTOS':
        return {isFetchingPhoto: true, pictures: []}
       case 'ADD_MARS_PHOTO_TO_STATE':
        return {isFetchingPhoto: false, pictures: action.data, comments:[]}
        case 'BEGIN_USER_REQUEST':
         return {...state, userRequestInProgress: true}
        case 'LOGIN':
          return { loggedIn: true, currentUser: action.payload.user }
        case 'COMMENT_REQUEST':
            return {...state, commentRequestInProgress: true}
        case 'ADD_COMMENT_TO_STATE':
        const comment = action.data
        return {...state, commentRequestInProgress: false, comments: state.comments.concat(comment) }
       default:
        return state;
    }
  }
