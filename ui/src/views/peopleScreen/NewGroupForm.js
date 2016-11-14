import React, { PropTypes } from 'react';
import 'app/css/peopleScreen/app.css';
import { TextField } from 'material-ui';

const styles = {

	NewGroupTextField: {
      width: '100%',
      fontFamily: 'Works Sans',
	},
	errorStyle: {
		fontSize: 15,
	}
}

const NewGroupForm = ({onChange, addGroup, value, groupNameError}) => {
  
	return (
		<div className="newGroupTextField" style={{opacity: 1}}>
			<form onSubmit={addGroup}>
				<TextField style={styles.NewGroupTextField} onChange={onChange} value={value}
	              floatingLabelText="New Group"
	              errorText={groupNameError}
	              errorStyle={styles.errorStyle}
	              autoFocus /><br /> 
        	</form>
		</div>
	);
};

export default NewGroupForm
