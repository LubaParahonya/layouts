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
          <div key={uuid()} className='card_prod'><div  className='name_product'>{el.name}</div><div  className='color_product'>{el.color}</div><div  className='price_product'>${el.price}</div><button className='to_add'>Add to cart</button><img className='element_img' src={el.img} /></div>
        ))}
      </div>
    )
  }
}

export default CardsView
