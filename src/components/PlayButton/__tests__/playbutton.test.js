import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import PlayButton from '../index';

configure({ adapter: new Adapter() });

test('renders correctly', () => {
  const tree = renderer.create(<PlayButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
