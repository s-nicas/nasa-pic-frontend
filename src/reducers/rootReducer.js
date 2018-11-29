export default function rootsReducer(state = {
    isFetchingPhoto: false,
    picture: [],
    pictures:[],
    comments: [],
    commentRequestInProgress: false
  }, action) {
  switch (action.type) {
    case 'FETCH_PHOTO':
      return {...state, isFetchingPhoto: true, picture: []}
    case 'ADD_PHOTO_TO_STATE':
      return {isFetchingPhoto: false, picture: action.data, comments: action.data.comments}
    case 'COMMENT_REQUEST':
      return {...state, commentRequestInProgress: true}
    case 'ADD_COMMENT_TO_STATE':
      const comment = action.data
      return {...state, commentRequestInProgress: false, comments: state.comments.concat(comment) }
    case 'FETCH_ALL_PHOTOS':
      return {isFetchingPhoto: true, pictures: []}
    case 'ADD_ALL_PHOTOS_TO_STATE':
      return {isFetchingPhoto: false, pictures: action.data}

    default:
         return state;

  }
}
