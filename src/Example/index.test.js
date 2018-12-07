import React from 'react';
import {shallow} from 'enzyme';
import Example from '.';

it('renders without throwing', () => {
	shallow(<Example aProp='a value' />);
});

it('shows the proper content', () => {
	const wrapper = shallow(<Example someVal='some value'/>);
	const content = <div>Here is the Example component: some value</div>;
	expect(wrapper.contains(content)).toEqual(true);
});