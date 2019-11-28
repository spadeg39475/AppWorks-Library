import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    //tag value
    const [tagSearch, setTagSearch] = useState('title');
    
    // search input value
    const [bookSearch, setBookSearch] = useState('');
    
    // firestore search query
    const [query, setQuery] = useState({tag: 'title', value: ''});
    
    // search result list
    const [searchResult, setSearchResult] = useState('');


    // popout info state
    const [infoIsShow, setInfoIsShow] = useState(false);
    const [info, setInfo] = useState('')


    return(
        <AppContext.Provider  value={{
            tagSearch, setTagSearch, 
            bookSearch, setBookSearch,
            query, setQuery,
            searchResult, setSearchResult,
            infoIsShow, setInfoIsShow,
            info, setInfo
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider ;