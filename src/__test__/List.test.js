import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import List from '../components/List';
import AppContextProvider from '../context/AppContext';

beforeEach(cleanup); // clean the DOM!

jest.mock('../firebase', () => ({
  firebase: {
    setBookStatus: jest.fn()
  },
}));


describe('<List />', () => {
    it('render the list', () => {
      
      const { getByText } = render(
        <AppContextProvider 
        value={searchResult=[{title:'title', author: 'author', status: 'borrored'}],
        query={tag: 'title', value:'白夜行'}}
        >
            <List />
        </AppContextProvider>);
    
        expect( getByText('借閱狀態')).toBeTruthy();
    });
  });