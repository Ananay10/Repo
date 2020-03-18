import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal';
import Ordersummary from '../../components/Burger/Order/Order';


const Ing_Prices = {
  lettuce: 0.5,
  onion: 0.4,
  cheese: 0.8,
  meat: 1.3
}


class BurgerBuilder extends Component{
  state = {
    ingredients: {
      lettuce: 0,
      onion: 0,
      cheese: 0,
      meat: 0
     
    },
    totalPrice:4,
    purchasable: false,
    purchasing: false
  }
  updatePurchaseState(ingredients) {
    const sum= Object.keys(ingredients)
      .map(igkey =>{
          return ingredients[igkey];
      })
      .reduce((sum, el)=> {
          return sum + el;
      },0);
      this.setState({purchasable: sum>0})
  }
  addIngHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      const updatedCount= oldCount + 1;
      const updatedIng = {
        ...this.state.ingredients
      };
      updatedIng[type]= updatedCount;
      const priceAddition = Ing_Prices[type];
      const newPrice= this.state.totalPrice + priceAddition;
      this.setState({totalPrice: newPrice, ingredients: updatedIng});
      this.updatePurchaseState(updatedIng);
  }
  removeIngHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0){
      return;
    }
    const updatedCount= oldCount - 1;
    const updatedIng = {
      ...this.state.ingredients
    };
    updatedIng[type]= updatedCount;
    const priceDeduction = Ing_Prices[type];
    const newPrice= this.state.totalPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIng});
    this.updatePurchaseState(updatedIng);
  }
  purchaseHandler= () => {
    this.setState({purchasing: true});
  }
  purchasecancelHandler= () => {
    this.setState({purchasing: false});
  }

  render(){
    return(
      <Aux>
        <Modal show={this.state.purchasing} modalclosed={this.puchasecancelHandler}> 
        <Ordersummary ingredients={this.state.ingredients}></Ordersummary> </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
        ingridientAdded= {this.addIngHandler}
        ingridientRemoved= {this.removeIngHandler}
        price={this.state.totalPrice}
        purchasable={this.state.purchasable} 
        ordered={this.purchaseHandler}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;