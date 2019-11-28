import React from 'react';
import ReactDOM from 'react-dom';
import AppContextProvider, { AppContext } from "../context/AppContext";
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../components/App'


beforeEach(cleanup);


describe('<App />', () => {

    it('renders the application', () => {
        const { queryByTestId } = render(
            <AppContextProvider>
                <App />
            </AppContextProvider> 
        );
        expect(queryByTestId('App')).toBeTruthy();
    }) 
}) 
