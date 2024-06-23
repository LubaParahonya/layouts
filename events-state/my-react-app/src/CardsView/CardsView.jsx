import React, { Component } from 'react'
import Store from '../Store'

export class CardsView extends Component {
    constructor(props){
        super(props)
        
    }
  render() {
    return (
      <div className='cards'>
        <button className='change'>кнопка</button>
        {this.props.cards.map(el => (
          <div key={el.id} className='card_prod'><div key={el.id} className='name_product'>{el.name}</div><div key={el.id} className='color_product'>{el.color}</div><div key={el.id} className='price_product'>${el.price}</div><button className='to_add'>Add to cart</button><img className='element_img' src={el.img} key ={el.id}/></div>
        ))}
      </div>
    )
  }
}

export default CardsView
