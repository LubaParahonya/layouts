import React, { Component } from 'react'
import '../App.css'


export class IconSwitch extends Component {
  constructor(props){
    super(props)
    this.onSwitch = this.onSwitch.bind(this);     
  }
  onSwitch(event) {
    this.setState({checked: !this.state.checked});
}
 
  render() {
    return (
      <>  
        <div className="material-icons" icon="view_module" onSwitch={checked? icon="view_module" : icon="view_list" }></div>
      </>
    )
  }
}

export default IconSwitch
