import React, { Component } from 'react'
import '../App.css'
import Store from '../Store'


export class IconSwitch extends Component {
  constructor(props){
    super(props)  
  }
 
  render() {
    return (
      <>  
     <button icon={this.props.checked ?'view_module' : 'view_list'} className='change  material-icons' onClick={this.props.onSwitch} >{this.props.checked ?'view_module': 'view_list'}</button>

      </>
    )
  }

  
}

export default IconSwitch
