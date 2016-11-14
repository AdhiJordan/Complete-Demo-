import React, { PropTypes } from 'react';

export default class DropDown extends React.Component {


   constructor(props, context) {
        super(props, context)

        this.state = {
 					  listVisible: false,
						display: ""
        }
        this.select = this.select.bind(this)
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
        
      }
		
				
				select(item) {
					this.props.selected = item;
				}
				
				show() {
					this.setState({ listVisible: true });
					document.addEventListener("click", this.hide);
				}
				
				hide() {
					this.setState({ listVisible: false });
					document.removeEventListener("click", this.hide);
				}
			
				render() {
					return (
						<div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
						<div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
							<span style={{ color: this.props.selected.hex }}>{this.props.selected.name}</span>
							<i className="fa fa-angle-down"></i>
						</div>
						<div className="dropdown-list">
							<div>
								{this.renderListItems()}
							</div>
						</div>
					</div>
					)
				}
				
				renderListItems() {
					let items = [];
					for (let i = 0; i < this.props.list.length; i++) {
						let item = this.props.list[i];
						items.push(<div onClick={this.select.bind(null, item)}>
							<span style={{ color: item.hex }}>{item.name}</span>
							<i className="fa fa-check"></i>
						</div>);
					}
					return items;
				}
			}
			
