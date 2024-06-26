import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './CardsView/cardsView.css'
import './ListView/listView.css'
import IconSwitch from './IconSwitch/IconSwitch'
import CardsView from './CardsView/CardsView'
import ListView from './ListView/ListView'






class Store extends Component{
  constructor(props){
    super(props)
    this.state = {
      products: [
          {
              id: 1,
              name: "Nike Metcon 2",
              price: "130",
              color: "red",
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
            }, {
              id: 2,
              name: "Nike Metcon 2",
              price: "130",
              color: "green",
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
            }, {
              id: 3,
              name: "Nike Metcon 2",
              price: "130",
              color: "blue",
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
            }, {
              id: 4,
              name: "Nike Metcon 2",
              price: "130",
              color: "black",
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
            }, {
              id: 5,
              name: "Nike free run",
              price: "170",
              color: "black",
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
            }, {
              id: 6,
              name: "Nike Metcon 3",
              price: "150",
              color: "green",
              img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
            }],
      checked : false         
  }
  this.onSwitch = this.onSwitch.bind(this);

   }
   onSwitch(){
    this.setState({checked: !this.state.checked});
  }
 
  
  render(){
    return (
      <>  
    <IconSwitch onSwitch={this.onSwitch} /> {this.state.checked ? (<CardsView cards={this.state.products} />):(<ListView items={this.state.products} />)
}  
    </>
    )
  }

}

export default Store
