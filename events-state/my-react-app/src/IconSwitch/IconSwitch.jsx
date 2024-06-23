import React, { Component } from 'react'
import '../App.css'

export class IconSwitch extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
        <IconSwitch icon={"view_list"} onSwitch={() => console.log("change state view_list")}/>
        <IconSwitch icon={"view_module"} onSwitch={() => console.log("change state view_module")}/>
      </>
    )
  }
}

export default IconSwitch
