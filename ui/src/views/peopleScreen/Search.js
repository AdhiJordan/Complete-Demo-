import React, { PropTypes } from 'react'
import 'app/css/peopleScreen/app.css'

const Search = ({filter, filterTextInput, disabled, placeholder}) => {

    function formSubmit(e) {
    	e.preventDefault()
    	return ''
    }
     return (
     	<div className="form-group has-feedback search">
	     	 <form onSubmit={e => formSubmit(e)}>
	        	<input 
                    className="form-control" 
                    type="text" onChange={filter} 
                    value={filterTextInput}  
                    placeholder={placeholder} 
                    disabled={disabled} />
	            <span className="glyphicon glyphicon-search form-control-feedback"></span>
	      	 </form>
       </div>
     );
}

export default Search
