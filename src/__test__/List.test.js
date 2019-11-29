import React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from '../components/List';
import { AppContext } from '../context/AppContext';

beforeEach(cleanup); 


function renderList(query, searchResult) {
  return render(
    <AppContext.Provider value= {{query,searchResult}}>
      <List />
    </AppContext.Provider>
  );
}


describe('<List />', () => {
    it('render the list', () => {
      const query = {
        tag: 'title', 
        value:'白夜行'
      };
      const searchResult = [{ 
        'title': '白夜行',
        'author': '東野圭吾',
         'id': '12345',
         'status': 'return'
       }]

      const { getByText } = renderList(query,searchResult)     
      expect( getByText('可借閱')).toBeTruthy();
    });
});