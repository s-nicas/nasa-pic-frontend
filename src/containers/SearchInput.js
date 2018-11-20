import React, {Component} from 'react'


class SearchInput extends Component {
  constructor(props) {
   super(props);
   this.state = {date: ''};
 }
  // state ={
  //   date: ''
  // }

  handleOnChange = (event) => {
    this.setState({
      date: event.target.value
    })
// working



  }


  handleOnSubmit = (event) => {
    event.preventDefault()

     this.props.fetchPhoto()
     debugger
     // return fetch(`https://api.nasa.gov/planetary/apod?date=${this.state.date}&hd=false&api_key=s773cGTT3VGPiJQZ9Hx0I1l4Nv07JiihqIYQohKf`)
     // .then(response => response.json())
     // .then(data => console.log(data))

  }


  render(){
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="date"
            value={this.state.date}
            onChange={(event) => this.handleOnChange(event)}
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
