import React from 'react';
import firebase from '../firebase';

function List(props){

    

    const borrowBook = (id, status) =>{
        if(status === 'borrowed'){
            alert('已經被借走了');
            return
        }
        let newStatus = firebase.setBookStatus(id, 'borrowed');
        newStatus.then(data=>console.log(data))
    }

    const returnBook = (id, status) =>{
        if(status === 'return'){
            alert('已經還過了');
            return
        }
        let newStatus = firebase.setBookStatus(id, 'return');
        newStatus.then(data=>console.log(data))
    }


    let listArr = props.searchResult
    let list = listArr.map((item) => {
        return (
            <div className='list-row' key={item.id}>
                <li className='title'>{item.data.title}</li>
                <li className='author'>{item.data.author}</li>
                <li className='status'>{item.data.status}</li>
                <li className='action'>
                    <button onClick={()=>borrowBook(item.id, item.data.status)}>我要借書</button>
                    <button onClick={()=>returnBook(item.id, item.data.status)}>我要還書</button>
                </li>
            </div>
        ) 
    })

    return(
        <div className='searchList'>
            <div className='list-row' >
                <li className='title'>書名</li>
                <li className='author'>作者</li>
                <li className='status'>狀態</li>
                <li className='action'>借/還書</li>
            </div>
          {list}
        </div>
    )
}

export default List;