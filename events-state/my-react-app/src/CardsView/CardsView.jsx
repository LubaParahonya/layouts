import React, { Component } from 'react'
import Store from '../Store'
import IconSwitch from '../IconSwitch/IconSwitch'
import { v4 as uuid } from "uuid";

export class CardsView extends Component {
    constructor(props){
        super(props)
        
    }
  render() {
    return (
      <div className='cards'>
        {this.props.cards.map(el => (
          <div key={uuid()} className='card_prod'><div key={uuid()} className='name_product'>{el.name}</div><div key={uuid()} className='color_product'>{el.color}</div><div key={uuid()} className='price_product'>${el.price}</div><button className='to_add'>Add to cart</button><img className='element_img' src={el.img} key ={uuid()}/></div>
        ))}
      </div>
    )
  }
}

export default CardsView
