import React, { PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
import 'app/css/peopleScreen/app.css';

const styles = {
	displayGroupDiv1: {
		fontFamily: 'Work Sans',
		cursor: 'pointer',
		color: '#464646',
		fontSize: 24,
		overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        paddingLeft: '10%',
        backgroundColor:'#BDBDBD',
	},
		displayGroupDiv2: {
		fontFamily: 'Work Sans',
		cursor: 'pointer',
		color: '#464646',
		fontSize: 24,
		overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        paddingLeft: '10%',
        backgroundColor:'#f5f5f5',
	},
}
class DisplayGroup extends React.Component {

	    constructor(props, context) {
        super(props, context);
        this.state = {
           id: -2
        }
        this.getStyle = this.getStyle.bind(this)
        this.changePersonsList = this.changePersonsList.bind(this)
        }

	 getStyle(id) {
	 	if(this.props.opacity === 0.5 && this.state.id === id) {
	 		return Object.assign({}, styles.displayGroupDiv1, this.props.styles) 
	 	}

	 	if(this.props.opacity === 0.5) {
	 		return Object.assign({}, styles.displayGroupDiv2, this.props.styles) 
	 	}
	 	if(this.props.allGroup) {
	 		return styles.displayGroupDiv2
	 	}
      return this.state.id === id ? styles.displayGroupDiv1 : styles.displayGroupDiv2
	}
	changePersonsList(id) {

		if(this.props.opacity === 0.5) {
			return ''
		}
       this.setState({id: id})
       this.props.changePersonsList(id)
       return ''
	}
	render() {
		let {groups, changePersonsList, styles} = this.props
	return (
		<div style={styles}>
		{_(_.clone(groups)).reverse().map(group => <div style={this.getStyle(group.id)} onClick={this.changePersonsList.bind(null, group.id)}>{group.groupName}</div>).value()}
		</div>

	);
}

}

export default DisplayGroup
