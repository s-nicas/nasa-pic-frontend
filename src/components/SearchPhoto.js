import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { fetchPhoto } from '../actions/picActions'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

class SearchPhoto extends Component {
   state = {
     date: '',
     redirect: false
  };

  handleOnChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    if (!this.state.date) {
      alert('Please select a valid date')
    } else {
      this.props.fetchPhoto(this.state.date);
      this.setState({
        redirect: true
      })
    }
  }

  handleRedirect = () => {
    if (this.state.redirect){
      return <Redirect to={`/photos/${this.state.date}`}/>
    }
  }

   todaysDate = () => {
     function twoDigit(n) { return (n < 10 ? '0' : '') + n; }

     var now = new Date();
      return `${now.getFullYear()}-${twoDigit(now.getMonth() + 1)}-${twoDigit(now.getDate())}`;
  }

  render(){
    return (

      <div className="SearchBar">
        <h3>Search NASAs Archive of Daily Photos</h3>
          <form className="text-center">
            <input
              type="date"
              value={this.state.date}
              onChange={this.handleOnChange}
              max={this.todaysDate()}
            />
            {this.handleRedirect()}
            <Button id="SearchBarButton" type="submit" onClick={this.handleOnSubmit}>Search</Button>
          </form>
      </div>

    )
  }
}

export default connect(null, {fetchPhoto})(SearchPhoto)
