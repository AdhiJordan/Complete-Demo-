import React, { PropTypes } from 'react';
import TextFieldCss from './TextFieldCss'

const TextFields = ({hideCampaignForm, campaignName, onChange}) => {

	return (
         <div className="cf">
         		<TextFieldCss 
              label="NEW CAMPAIGN" 
              placeholder="Campaign Name" 
              className="campaignName" 
              value={campaignName}
              onChange={onChange}/>
            <TextFieldCss 
            	label="TAGS" 
            	placeholder="Enter Tags" 
            	className="tagName" />
            <div className="campaignCloseScreen" onClick={hideCampaignForm}>X</div>	
         </div>
	)
}

TextFields.PropTypes = {

}

export default TextFields