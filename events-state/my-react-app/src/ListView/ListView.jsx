import React, { Component } from 'react'
import Store from '../Store'


export class ListView extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
          <div className='cards_list'>
            <button className='change_list'>кнопка</button>
            {this.props.items.map(el => (
              <div key={el.id} className='card_prod_list'><img className='element_img_list' src={el.img} key={el.id}/><div key={el.id} className='name_product_list'>{el.name}</div><div key={el.id} className='color_product_list'>{el.color}</div><div key={el.id} className='price_product_list'>${el.price}</div><button className='to_add_list'>Add to cart</button></div>
            ))}
        
          </div>
        )
      }
    }
export default ListView
