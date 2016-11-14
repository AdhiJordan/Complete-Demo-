import React, {PropTypes} from 'react'
import 'app/css/entityScreen/app.css'
import classNames from 'classnames';

const styles = {
	error: {
		color: 'brown',
	}
}

const EntityName = ({name, label, value, onChange, error, readonly}) => {


	let wrapperClass = classNames({
      'form-group': true,
      'entityName': true,
      'has-error': error && error.length > 0
    });

        	return (
        <div className={wrapperClass}>
		   <span className="newEntityLabel">{label}</span>
		   <div className="field entityNameField">
		    
		      <input 
		         type="text"
		         name={name}
		         className="form-control"
		         value={value}
		         onChange={onChange} 
		         readOnly={readonly}
		         autoFocus={true}
		         required/>
		         {error && <div style={styles.error}>{error}</div>}
		        
		   </div>
		</div>
        	)
        }

EntityName.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    readonly: PropTypes.bool.isRequired
}


export default EntityName;
