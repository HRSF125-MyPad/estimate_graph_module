import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LineChart from './LineChart.jsx';
import Headers from './Headers.jsx';

const Wrapper = styled.div`
  font-family: Libre Franklin;
  width: 670px;
  height: 264px;
`

class App extends React.Component {
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
        var data = response.data[0];
        // this.setState({ estimates: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Wrapper>
        <Headers></Headers>
        <LineChart></LineChart>
      </Wrapper>
    )
  }
}


export default App;