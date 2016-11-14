import React, { PropTypes } from 'react'
import 'app/css/peopleScreen/app.css'
const ShowGroup = ({group, delGroup}) => {
       
       let groups = []
       for (let value of group) {
       	     let name = value.groupName ? value.groupName : value 
			  groups.push(<div className="showGroup cf"><div>{name}</div><div onClick={delGroup.bind(null, name)}>x</div></div>)
	  }
	return (
		
		<div>{groups}</div>

		);
};

export default ShowGroup
