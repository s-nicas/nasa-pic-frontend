import React, {Component} from 'react'


class SearchInput extends Component {
  state ={
    date: ''
  }

  handleOnChange = (event) => {
    this.setState({
      date: event.target.value
    })
// working 
    return fetch(`https://api.nasa.gov/planetary/apod?date=${this.state.date}&hd=false&api_key=s773cGTT3VGPiJQZ9Hx0I1l4Nv07JiihqIYQohKf`)
    .then(response => response.json())
    .then(data => console.log(data))


  }


  handleOnSubmit = (event) => {
    event.preventDefault()
  }


  render(){
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="date"
            value={this.state.date}
            onChange={this.handleOnChange}
            >
          </input>

          <input type="submit" value="search">
          </input>
        </form>
      </div>
    )
  }
}

export default SearchInput
