import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  
  svg {
    background: white;
    width: 670px;
    height: 264px;
  
    /* polyline {
      stroke: rgb(51, 51, 51);
      stroke-width: 2;
      opacity: 1;
      fill: none;
    }  */

    g {
     
      line {
        stroke: rgb(226, 226, 226);
        fill: transparent;
        stroke-width: 1;
        stroke-linejoin: round;

        text {
          text-anchor: "middle";
          color: #333333;
          font-size: 14px;
          /* fill: rgb(153, 153, 153); */
          font-family: Libre Franklin;
          stroke: transparent;
          letter-spacing: normal;
          padding: 8px;
          stroke-width: 0;
        }
      }

    }
   
 }
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
        <svg viewBox="0 0 670 264">
          <g>
            {/* parallel lines in graph*/}
            <line x1="15" x2="610" y1="214" y2="214"></line>
            <line x1="610" x2="15" y1="178" y2="178"></line>
            <line x1="610" x2="15" y1="133" y2="133"></line>
            <line x1="610" x2="15" y1="88" y2="88"></line>
            <line x1="610" x2="15" y1="43" y2="43"></line>
            
            {/* labels on x-axis */}
            <text dx="0" dy="11.9" x="16" y="226">Jan</text>
            <text dx="0" dy="11.9" x="112" y="226">Mar</text>
            <text dx="0" dy="11.9" x="210" y="226">May</text>
            <text dx="0" dy="11.9" x="309" y="226">Jul</text>
            <text dx="0" dy="11.9" x="409" y="226">Sept</text>
            <text dx="0" dy="11.9" x="508" y="226">Nov</text>
            <text dx="0" dy="11.9" x="606" y="226">Jan</text>

            {/* labels on y-axis */}
            <text dx="0" dy="4.97" x="622" y="43">$3.0M</text>
            <text dx="0" dy="4.97" x="622" y="88">$2.5M</text>
            <text dx="0" dy="4.97" x="622" y="133">$2.0M</text>
            <text dx="0" dy="4.97" x="622" y="178">$1.5M</text>
          </g>
          
          {/* <polyline points="
       00,120
       20,60
       40,80
       60,20
       80,80
       100,80
       120,60
       140,100
       160,90
       180,80
       200, 110
       220, 10
       240, 70
       260, 100
       280, 100
       300, 40
       320, 0
       340, 100
       360, 100
       380, 120
       400, 60
       420, 70
       440, 80
     "
          /> */}
        </svg>
      </Wrapper>
    )
  }
}


export default App;