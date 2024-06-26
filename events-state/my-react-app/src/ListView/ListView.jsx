import React, { Component } from 'react'
import Store from '../Store'
import IconSwitch from '../IconSwitch/IconSwitch'
import { v4 as uuid } from "uuid";


export class ListView extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
          <div className='cards_list'>
            {this.props.items.map(el => (
              <div key={uuid()} className='card_prod_list'><img className='element_img_list' src={el.img} key={uuid()}/><div key={uuid()} className='name_product_list'>{el.name}</div><div key={uuid()} className='color_product_list'>{el.color}</div><div key={uuid()} className='price_product_list'>${el.price}</div><button className='to_add_list'>Add to cart</button></div>
            ))}
        
          </div>
        )
      }
    }
export default ListView
