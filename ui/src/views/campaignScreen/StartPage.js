import React, { PropTypes } from 'react'
import 'app/css/campaignScreen/app.css'
import NewButton from 'views/common/NewButton'

class StartPage extends React.Component { 
	constructor(props, context) {
        super(props, context);

        this.state = {
        }
    }

    ToggleAddPersonForm() {
    	return ''
    }
    filterTextInput() {
    	return ''
    }
    startPage() {
        let {hideStartPage, startPage, l} = this.props
        if ( startPage) {
            return <div className="start">
                    <p>Campaigns can be triggered to send content in response to an action.
                    <br />Create your first one!</p>
                    <NewButton 
                        onClick={hideStartPage} 
                        value="CAMPAIGN" />
                </div>
        }
        return ''
    }

	render() {
		let {hideStartPage, startPage, l} = this.props
		return (
        	<div>
                {this.startPage()}
        		
        	</div>
        )
	}
}

StartPage.propTypes = {

};

export default StartPage