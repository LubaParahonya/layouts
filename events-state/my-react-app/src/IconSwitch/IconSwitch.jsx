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
     <button className='change' onClick={this.props.onSwitch} >кнопка</button>
      </>
    )
  }

  
}

export default IconSwitch
