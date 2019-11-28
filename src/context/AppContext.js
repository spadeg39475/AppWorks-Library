import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    
    const [tagSearch, setTagSearch] = useState('title');
    const [bookSearch, setBookSearch] = useState('');
    const [query, setQuery] = useState({tag: 'title', value: ''});
    const [searchResult, setSearchResult] = useState('');

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