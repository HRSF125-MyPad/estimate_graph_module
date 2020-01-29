import React from 'react';
import axios from 'axios';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.getEstimate();
  }

  getEstimate () {
    axios.get('/homes')
      .then((response) => {
        console.log('Data:', response.data)
        //this.setState({})
      })
      .catch((err) => {
        console.log(err);
      });

  }



  render() {
    return (
      <div>
        <h1>Hello Graph!</h1>
      </div>
    )
  }
}

export default Graph;