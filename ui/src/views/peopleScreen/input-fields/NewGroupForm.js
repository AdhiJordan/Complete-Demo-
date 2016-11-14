import React, { PropTypes } from 'react';
import 'app/css/peopleScreen/app.css';
import { TextField } from 'material-ui';

const styles = {

	NewGroupTextField: {
      width: 'inherit',
	},
}
const NewGroupForm = () => {
  
	return (
		<div >
			<TextField style={styles.NewGroupTextField}
              hintText="Group Name"
            /><br /> 
		</div>
	);
};

export default NewGroupForm
