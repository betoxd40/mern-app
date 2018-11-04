import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import SuccessMessage from "../SuccessMessage";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let wrapper;
const message = 'Test Message';

describe('CreationOrder Component', () => {
    it('should render without errors', () => {
        wrapper = shallow(
            <SuccessMessage
                message={message}/>,
        );
    });
    it('should render a message passed by props', () => {
        wrapper = shallow(
            <SuccessMessage
                message={message}/>,
        );
        expect(wrapper.find('h4').length).toEqual(1);
        expect(wrapper.text()).toEqual(message);
    });
});