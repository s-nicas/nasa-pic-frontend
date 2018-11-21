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
  }


  handleOnSubmit = (event) => {
    event.preventDefault()
     this.props.fetchPhoto()
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
