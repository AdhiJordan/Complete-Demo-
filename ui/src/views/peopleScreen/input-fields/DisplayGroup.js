import React, { PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
import 'app/css/PeopleScreen/app.css';

const DisplayGroup = ({groups}) => {
	return (
         <TableBody>
		      <TableRow>
		      {
		      	groups.map(group => <TableRowColumn>{group.groupName}</TableRowColumn>)
		      }
		      </TableRow>
		</TableBody>

	);

}

export default DisplayGroup
