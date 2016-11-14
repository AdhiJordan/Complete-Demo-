import React, { PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
import 'app/css/peopleScreen/app.css';

const styles = {
	groupsTable: {
		backgroundColor: '#f5f5f5',
		fontFamily: 'Work Sans',
		borderBottom: 0,
		cursor: 'pointer'
	},
	groupsValue: {
		color: '#464646',
		fontSize: 24,
		overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        // backgroundColor:'white'
        // width: 140,
	}
}
const DisplayGroup = ({groups, changePersonsList}) => {
	function dd() {

	}
	return (
		<Table onRowSelection={changePersonsList} selectable={true}>
         <TableBody displayRowCheckbox={false} deselectOnClickaway={false}>
		      
		      {
		      	_(_.clone(groups)).reverse().map(group => <TableRow style={styles.groupsTable} selectable={true}> <TableRowColumn style={styles.groupsValue}>{group.groupName}</TableRowColumn></TableRow>
).value()
		      }
		</TableBody>
	    </Table>

	);

}

export default DisplayGroup
