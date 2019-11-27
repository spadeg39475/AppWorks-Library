import React, { useContext }from 'react';
import { AppContext } from '../context/AppContext';

const Popout = (props) => {
    
    const { infoIsShow, setInfoIsShow, info } = useContext(AppContext);
    
    return(
        <div className='popout' 
        style={infoIsShow ? {display: 'flex'} : {display:'none'}}
        onClick={()=>setInfoIsShow(false)}
        >
            <div className='info'>{info}</div>
        </div>
    )
    
}

export default Popout;