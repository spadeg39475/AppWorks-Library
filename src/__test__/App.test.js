import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../components/App';
import AppContextProvider from '../context/AppContext';


describe('<App />', () => {
  it('renders without crashing', () => {
    
    const { getByText } = render(
      <AppContextProvider>
          <App />
      </AppContextProvider>);
  
      expect(getByText('PicCollage Library')).toBeTruthy();
  });

  it('renders tag selector', () => {
    const {getByDisplayValue } = render(
      <AppContextProvider>
          <App />
      </AppContextProvider>);
  
      expect(getByDisplayValue('書名')).toBeTruthy();
  });

  it('renders input', () => {
    const { getByPlaceholderText } = render(
      <AppContextProvider>
          <App />
      </AppContextProvider>);
  
      expect( getByPlaceholderText('請搜尋完整書名或作者')).toBeTruthy();
  });
});