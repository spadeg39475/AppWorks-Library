import React from 'react';
import firebase from '../firebase';

const List = props => {


    const toggleBook = (id, status) =>{
        firebase.setBookStatus(id, status==='borrowed'? 'return' : 'borrowed');
    }


    let searchResult = props.searchResult;
   
    searchResult = searchResult.map((item) => {
        return (
            <div className='list-row' key={item.id}>
                <li className='title'>{item.title}</li>
                <li className='author'>{item.author}</li>
                <li className='bID'>{item.id.substring(0,5)}</li>
                <li className='status'>{item.status}</li>
                <li className='action'>
                    <button onClick={()=>toggleBook(item.id, item.status)}>我要借書</button>
                    <button onClick={()=>toggleBook(item.id, item.status)}>我要還書</button>
                </li>
            </div>
        ) 
     })
    
    return(
        <div className='searchList' >
            <div className='list-row'  id='list-title'>
                <li className='title'>書名</li>
                <li className='author'>作者</li>
                <li className='bID'>書籍編碼(前五碼)</li>
                <li className='status'>借閱狀態</li>
                <li className='action'>借 / 還書</li>
            </div>
            {searchResult}
        </div>
    )
    
}

export default List;

 // {searchResult.map((item) => {
    //     return (
    //         <div className='list-row' key={item.id}>
    //             <li className='title'>{item.title}</li>
    //             <li className='author'>{item.author}</li>
    //             <li className='status'>{item.status}</li>
    //             <li className='action'>
    //               <button onClick={()=>toggleBook(item.id, item.status)}>借/還書</button>
    //             </li>
    //         </div>
    //     ) 
    //   })}