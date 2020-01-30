import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['2015', '2016', '2017' , '2018', '2019', '2020'],
        datasets: [
          {
            fill: false,
            lineTension: .2,
            label: 'myPad Estimate',
            backgroundColor: 'rgba(0, 0, 0',
            data: [1.7, 1.6, 2.0, 1.9, 2.3, 2.2]
          }
        ]
      }
    }
  }
  

  componentDidMount() {
    // this.getEstimate();
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
     
     <div style={{ position: 'relative', width: 600, height: 550 }}>
       {/* <h1>myPad Estimate</h1> */}
       <Line 
       options={{
         responsive: true
       }}
       data= { this.state.data }
        />
     </div>
    )
  }
}


export default App;