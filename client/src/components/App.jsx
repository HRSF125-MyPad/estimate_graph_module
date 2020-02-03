import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Libre Franklin;

  svg {
    background: white;
    width: 670px;
    height: 264px;
  
    polyline {
      fill: transparent;
      stroke: rgb(51, 51, 51);
      stroke-width: 2;
      opacity: 1;
    } 

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

const EstimateValueHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  div {
    font-size: 1.75rem;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: Libre Franklin;
    vertical-align: baseline;
  }
  
  button {
    /* box-sizing: border-box;
    text-rendering: optimizeLegibility; */
    border-radius: 2px 2px 2px 2px;
    transition: all .1s ease-out 0s;
    display: inline-block;
    height: 40px;
    padding: 12px 1.5rem;
    font-family: inherit;
    font-weight: 700;
    font-size: 1rem;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    letter-spacing: -.1px;
    line-height: 1;
    box-shadow: none;
    cursor: pointer;
    text-decoration: none;
    
  }
`
const Heading = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: Libre Franklin;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  span {
    color: #75b945;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
`

const Span1 = styled.span`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: Libre Franklin;
  border: 0;
  font-size: 100%;
  text-align: right;
  vertical-align: baseline;
  min-width: 105px;
  color: #999;
  padding: .5rem 0;
  border-bottom: .125rem solid transparent;
  transition: all .2s ease-out 0s;
  cursor: pointer;    
  user-select: none;
`

const Span2 = styled.span`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  text-align: right;
  font: inherit;
  vertical-align: baseline;
  margin-left: 1rem;
  color: #333;
  border-color: currentColor;
  padding: .5rem 0;
  border-bottom: .125rem solid transparent;
  transition: all .2s ease-out 0s;
  
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
        <EstimateValueHeader>
          <div>$2,474,344</div>
          <button href=''>Track This Estimate</button>
        </EstimateValueHeader>
        <Heading>
            <span>$1.1M </span>
               since sold in 2012
        </Heading>
        <Span1>1 year</Span1>
        <Span2>5 year</Span2>
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
          
          <polyline points="
            20,90
            80,100
            130,120
            180,130
            230,140
            280,150
            320,140
            370,145
            420,160
            470,155
            550,165
            610,150
          "
          /> 
        </svg>
      </Wrapper>
    )
  }
}


export default App;