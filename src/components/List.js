import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import firebase from '../firebase';

const List = () => {

    const {searchResult, query, setInfo, setInfoIsShow} = useContext(AppContext);

    const borrowBook = (id) =>{
        firebase.setBookStatus(id, 'borrowed');
        setInfoIsShow(true);
        setInfo('借閱成功 !');
    }

    const returnBook = (id) =>{
        firebase.setBookStatus(id, 'return');
        setInfoIsShow(true);
        setInfo('感謝您的歸還 !');
    }

    let searchResultList = searchResult;
    
    //if have search result
    if( searchResult.length > 0){
        searchResultList = searchResult.map((item) => {
            return (
                <div className='list-row' key={item.id}>
                    <li className='title'>{item.title}</li>
                    <li className='author'>{item.author}</li>
                    <li className='bID'>{item.id.substring(0,5)}</li>
                    <li className='status'>{item.status==='borrowed'? '已借出' : '可借閱'}</li>
                    <li className='action'>
                        <button onClick={()=>borrowBook(item.id)} disabled={item.status==='borrowed'? true : false}>我要借書</button>
                        <button onClick={()=>returnBook(item.id)} disabled={item.status==='return'? true : false}>我要還書</button>
                    </li>
                </div>
            ) 
         })

    //if no search result 
    }else {  
        searchResultList = (
            <div className='no-result'>查無結果，請輸入正確書名或作者</div>
        )
    }
    
    // show list after search
    if(query.value){
        return (
            <>
                <div className='searchList' >
                    <div className='list-row'  id='list-title'>
                        <li className='title'>書名</li>
                        <li className='author'>作者</li>
                        <li className='bID'>書籍編碼(前五碼)</li>
                        <li className='status'>借閱狀態</li>
                        <li className='action'>借 / 還書</li>
                    </div>
                    { query.value ? searchResultList : null}
                </div>
            </>
        )
    }
    else return null;
}

export default List;
