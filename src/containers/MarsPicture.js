import React, {Component} from 'react'
import { Image, Col, Row, Grid } from 'react-bootstrap'
class MarsPicture extends Component {

  render(){
    return(
    <div>
      <Grid>
        <Row>
          <Col xs={6} md={3}>
           <Image href={this.props.image} src={this.props.image} thumbnail />
           </Col>
        </Row>
      </Grid>
    </div>
  )
  }
}
export default MarsPicture
//
