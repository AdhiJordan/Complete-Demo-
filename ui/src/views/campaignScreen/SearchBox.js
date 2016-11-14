import React, { PropTypes } from 'react'
// import 'app/css/peopleScreen/app.css'

const Search = ({filter, filterTextInput, placeholder, icon}) => {

    function formSubmit(e) {
    	e.preventDefault()
    	return ''
    }
    
    let className = "searchBoxIcon"
    if(typeof icon == 'string') {
         className = "searchBoxIconAlt"
    }
     return (
     	<div className="searchBoxFull">
            <div className={className}>{icon}</div>
	     	 <form onSubmit={e => formSubmit(e)} className="form-group has-feedback searchBox">
	        	<input 
                    className="form-control" 
                    type="text" 
                    onChange={filter} 
                    value={filterTextInput}  
                    placeholder={placeholder} 
                    disabled={false} />
	            <span className="glyphicon glyphicon-search form-control-feedback"></span>
	      	 </form>
       </div>
     );
}

export default Search
