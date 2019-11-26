import React , { useState, useEffect }from 'react';
import firebase from '../firebase'
import List from './List';
import '../css/app.css'






function App() {
  
  const [tagSearch, setTagSearch] = useState('title');
  const [bookSearch, setBookSearch] = useState('');
  const [query, setQuery] = useState({tag: 'title', value: ''});
  const [searchResult, setSearchResult] = useState([]);
  

  useEffect(()=>{
    
    let unsubscribe = firebase.db.collection('booklist')
        .where(query.tag, '==', query.value)
        .onSnapshot(snapshot => {
          let result =[]
          snapshot.forEach(doc => {
            result.push({id: doc.id, ...doc.data()})
          })
          setSearchResult(result);
          console.log('setdata')
        })

    return () => unsubscribe();

  },[query])



  const handleSearch = async(e) => {
    e.preventDefault();
    let result;
    
    tagSearch === 'title'
    ?  result = await firebase.getBooksByTitle(bookSearch)
    :  result = await firebase.getBooksByAuthor(bookSearch)

    setQuery({tag: tagSearch, value: bookSearch});
    setSearchResult(result);
  }

  const handleTag = e => {
    setTagSearch(e.target.value);
  }

  

  return (
    <div className="App">
      <h1>PicCollage Library</h1>
      <form onSubmit={handleSearch}>
        <select onChange={handleTag} >
          <option value='title'>書名</option>
          <option value='author'>作者</option>
        </select>
        <input 
          type='text' 
          value={bookSearch} 
          onChange={(e)=>{setBookSearch(e.target.value)}}
          placeholder='請搜尋完整書名或作者'
        />
      </form>
      <List searchResult={searchResult} />
      
    </div>
  );
}

export default App;
