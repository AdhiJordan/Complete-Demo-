import React, {PropTypes} from 'react';
import TextInput from 'views/entityScreen/TextInput';
import SelectInput from 'views/entityScreen/SelectInput';
import 'app/css/entityScreen/app.css';

const AttributeForm = ({onClick, onChange, attributes, clearAll, error, focus}) => {

		return (

           <div className="cf">
           <div className="attributesCount">ATTRIBUTES[{attributes.attributes.length}]</div>
           <form className="attributeForm aa">
           <div className="newLabel">NEW</div>
           <div className="clearAll"><a href="" onClick={clearAll}>CLEAR ALL</a></div>
			<TextInput
		     name="attributeName"
		     placeholder="Attribute Name" 
		     onChange={onChange}
		     value={attributes.attributeName}
		     error={error.attributeName}
		     focus={focus} />

		    <SelectInput
		     name="attributeType"
		     label="Gender"
		     defaultOption="Attribute Type"
		     onChange={onChange}
		     value={attributes.attributeType} 
		     error={error.attributeType}
		     focus={focus}/>
		    <a href="" className="triangle-btn" onClick={onClick}><span className="glyphicon glyphicon-chevron-right"></span></a>
		   </form>
		   </div>


		);

}

AttributeForm.propTypes = {
    attributes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.object.isRequired,
    clearAll: PropTypes.func.isRequired,
    error: PropTypes.object
}


export default AttributeForm;
