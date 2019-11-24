import React , { useState, useEffect }from 'react';
import firebase from '../firebase'
import List from './List';
import '../css/app.css'



function App() {

  const [bookSearch, setBookSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  


  const handleSearch =  async (title) => {
    let result = await firebase.getBooks(title);
    setSearchResult(result);
  }

  useEffect(() => {
    const unsubscribe = firebase.db.collection('booklist').where('title', '==', bookSearch)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'modified'){
            handleSearch(bookSearch)
          }
        })
      })
    return () => unsubscribe()

}, [bookSearch])


  return (
    <div className="App">
      <h1>AppWorks Library</h1>
      <input type='text' value={bookSearch} onChange={(e)=>{setBookSearch(e.target.value)}} />
      <button onClick={() => handleSearch(bookSearch)} >Search</button>
      <List searchResult={searchResult}/>
    </div>
  );
}

export default App;
