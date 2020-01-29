import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../index.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('first enzyme test', () => {
  it('Should render without crashing', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });
})


// sample test
describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});