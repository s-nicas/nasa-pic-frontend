import React, {Component} from 'react'


class SearchInput extends Component {
  state ={
    date: ''
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
  }


  render(){
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
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
