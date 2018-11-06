import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Button from '@material-ui/core/Button';
import Adapter from 'enzyme-adapter-react-16';
import CreationOrder from './index';
import configureStore from 'redux-mock-store'

// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();
let wrapper;
let store;

configure({ adapter: new Adapter() });

const initialState = {
    modal: {
        show: false,
    },
    saga : {
        eta: ''
    },
};
const initialStateWithETA = {
    modal: {
        show: false,
    },
    saga : {
        eta: 'message'
    },
};

describe('CreationOrder Component', () => {
    it('should render without errors', () => {
        store = mockStore(initialState);
        wrapper = shallow(
            <CreationOrder
                store={store}/>,
        );
    });
    it('should render the correct content', () => {
        store = mockStore(initialState);
        wrapper = mount(
            <CreationOrder
                store={store}/>,
        );
        expect(wrapper.find('h1').length).toEqual(1);
        expect(wrapper.find('h5').length).toEqual(1);
        expect(wrapper.find('Button').length).toEqual(1);
        expect(wrapper.find('OrdenModal').length).toEqual(1);
        expect(wrapper.find('SuccessMessage').length).toEqual(0);
    });
    it('should render the correct content', () => {
        store = mockStore(initialStateWithETA);
        wrapper = mount(
            <CreationOrder
                store={store}/>,
        );
        expect(wrapper.find('SuccessMessage').length).toEqual(1);
    });
});