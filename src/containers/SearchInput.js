import React, {Component} from 'react'


class SearchInput extends Component {
  state ={
    date: ''
  }


  render(){
    return (
      <div>
        <form>
          <input
            type="date">
          </input>
          <input type="submit" value="search">
          </input>
        </form>
      </div>
    )
  }
}

export default SearchInput
