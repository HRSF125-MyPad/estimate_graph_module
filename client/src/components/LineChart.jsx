import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  
  svg {
    background: white;
    width: 670px;
    height: 264px;
  
    g {
     
      line {
        stroke: rgb(226, 226, 226);
        fill: transparent;
        stroke-width: 1;
        stroke-linejoin: round;

        text {
          text-anchor: "middle";
          color: #999999;
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


class LineChart5Year extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
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
            <text dx="0" dy="11.9" x="15" y="226">2015</text>
            <text dx="0" dy="11.9" x="134" y="226">2016</text>
            <text dx="0" dy="11.9" x="253" y="226">2017</text>
            <text dx="0" dy="11.9" x="371" y="226">2018</text>
            <text dx="0" dy="11.9" x="490" y="226">2019</text>
            <text dx="0" dy="11.9" x="609" y="226">2020</text>

            {/* labels on y-axis */}
            <text dx="0" dy="4.97" x="622" y="43">$3.0M</text>
            <text dx="0" dy="4.97" x="622" y="88">$2.5M</text>
            <text dx="0" dy="4.97" x="622" y="133">$2.0M</text>
            <text dx="0" dy="4.97" x="622" y="178">$1.5M</text>
          </g>
        </svg>
      </Wrapper>
    )
  }

}

export default LineChart5Year;